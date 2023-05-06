<template>
    <div class="container">
      <section id="login">
        <div class="login-form">
          <h1>Login Form</h1>

          <div class="icon-input">
              <div class="user-icon"></div> 
              <input 
                  id="username"
                  name="email" 
                  type="text" 
                  placeholder="Username" 
                  v-model="email"
                  :class="loggedOut ? '' : 'hide'" 
                />
              <p class="input-error" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </p>
          </div>

          <div class="icon-input">
              <div class="lock-icon"></div> 
              <input 
                  id="password"
                  name="email" 
                  type="password" 
                  placeholder="Password" 
                  v-model="password"
                  :class="loggedOut ? '' : 'hide'"  
                  />
              <p class="input-error" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </p>
            </div>

          <div>
            <button
              v-show="loggedOut"
              class="login-btn"
              @click="handleLogIn" 
              :disabled="email.length < 1 || password.length < 1"
            > 
            sign in
            </button>

            <button
              v-show="!loggedOut"
              class="login-btn"
              @click="handleLogOut" 
            > 
            log out
            </button>
          </div>

          <div class="forgot-password" :style="loggedOut ? 'visibility:visible' : 'visibility:hidden'">
            <span href="#">Not a member?</span>
            <a @click="handleSignupAttempt">Sign up now</a>
          </div>
        </div>
      </section>
      <BasicModal :msg="modalMsg" v-if="showModal" @close="closeModal"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LOGIN_QUERY } from '@/graphql';
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import BasicModal from '../components/Modal.vue'
import loginMixin from '@/mixins/login'

export default defineComponent({
  name: 'LoginForm',

  components: {
    BasicModal
  },

  mixins: [loginMixin],

  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    }
  },

  mounted() {
    this.loggedOut = ! this.checkLogin();
  },

  data() {
    return {
      email: '',
      password: '',
      userId: '',
      showModal: false,
      modalMsg: '',
      loggedOut: true,

      v$: useValidate(),
    }
  },

  methods: {
    handleLogIn():void {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.runLoginQuery();
      }
    },

     handleLogOut():void {
       localStorage.removeItem("logged_user");
       this.loggedOut = true;
       this.$emit('changeLogin');
    },

    runLoginQuery():void {
      this.$apollo.query({
        query: LOGIN_QUERY,
        variables: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        res.data.allUsers.length > 0 ? this.handleLogin(res.data.allUsers[0]) : this.handleLoginError();
      })
    },

    handleLogin(user: { id: string, Tokens: { token: string, token_type: string } }):void {
      localStorage.setItem("logged_user", JSON.stringify(user));

      this.modalMsg = `Logged-in user ID: ${user.id}`;
      this.showModal = true;

      this.loggedOut = false;
      this.$emit('changeLogin');
    },

    handleLoginError():void {
      this.modalMsg = "Wrong credentials";
      this.showModal = true;
    },

    handleSignupAttempt():void {
      this.modalMsg = "No signup functionality requested";
      this.showModal = true;
    },

    closeModal():void {
      this.showModal = false;
      this.modalMsg = "";
    },
  },
});
</script>

<style scoped>
.input-error {
  color: red;
  position: absolute;
  margin-top: 53px;
}

.hide {
  visibility: hidden;
}
</style>