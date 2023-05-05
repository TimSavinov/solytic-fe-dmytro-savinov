<template>
    <div class="container">
      <section id="login">
        <div class="login-form">
          <h1>Login Form</h1>
          <div class="icon-input">
            <div class="user-icon"></div> 
            <input type="text" id="username" placeholder="Username" v-model="email" />
          </div>
          <div class="icon-input">
            <div class="lock-icon"></div> 
            <input type="password" id="password" placeholder="Password"  v-model="password"/>
          </div>
          <div>
            <button class="login-btn" @click="login">sign in</button>
          </div>
          <div class="forgot-password">
            <span href="#">Not a member?</span>
            <a href="#">Sign up now</a>
          </div>
        </div>
      </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LOGIN_QUERY } from '@/graphql';

export default defineComponent({
  name: 'LoginForm',

  data() {
    return {
      email: 'user@name.com',
      password: 'passwd',
    }
  },
  methods: {
    login() {
      this.$apollo.query({
        query: LOGIN_QUERY,
        variables: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        console.log('GRAPH success', res);
      }).catch(err => {
        console.log('GRAPH error', err);
      })
  }
}
  
});
</script>
