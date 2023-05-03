<template>
    <div class="container">
      <section id="login">
        <form>
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
            <input type="submit" value="sign in" @submit="login"/>
          </div>
          <div class="forgot-password">
            <span href="#">Not a member?</span>
            <a href="#">Sign up now</a>
          </div>
        </form>
      </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {

    }
  }
  
});
</script>
