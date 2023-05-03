<template>
    <div class="container">
      <section id="login">
        <form action="">
          <h1>Login Form</h1>
          <div class="icon-input">
            <div class="user-icon"></div> 
            <input type="text" placeholder="Username" id="username" />
          </div>
          <div class="icon-input">
            <div class="lock-icon"></div> 
            <input type="password" placeholder="Password" id="password" />
          </div>
          <div>
            <input type="submit" value="sign in" />
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
  
});
</script>
