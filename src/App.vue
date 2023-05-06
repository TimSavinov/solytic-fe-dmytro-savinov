<template>
  <div>
    <AppHeader :logged="loggedIn"/>
    <router-view @changeLogin="changeLoginState"/>
  </div>
 </template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  name: 'App',
  
  components: {
    AppHeader,
  },

  data() {
    return {
      loggedIn: false
    }
  },

  methods: {
    changeLoginState(): void {
      this.loggedIn = !this.loggedIn;
    }
  }
});
</script>