<template>
  <div class="navigation">
    <router-link to="/">Login</router-link>
    <router-link v-if="loggedIn" to="/user">User Details</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import loginMixin from '@/mixins/login'

export default defineComponent({
  name: 'LoginForm',
  mixins: [loginMixin],
  props: {
    logged: Boolean
  },
  mounted() {
    this.loggedIn = this.checkLogin();
  },
  watch: {
    logged() {
      this.loggedIn = !this.loggedIn;
    }
  },
  data() {
    return {
      loggedIn: false
    }
  }
})
</script>

<style scoped>
.navigation {  
  display: flex;
  margin: 0;  
  padding: 0px;  
  overflow: hidden;  
  background-color: #3b4148;  
}
  
.navigation a {  
  display: block;  
  color: #60646a;  
  text-align: center;  
  padding: 10px 20px;  
  text-decoration: none;  
}  
.navigation .router-link-active{  
background-color: #2c3337;  
color: white;  
}  
.navigation a:hover {  
  background-color: #2c3339;  
  color: white;  
}
</style>