<template>
  <ul class="user-info">
    <li>
      user id: {{ User.id }}
    </li>
    <li>
      user email: {{ User.email }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { USER_QUERY } from '@/graphql';


export default defineComponent({
  name: 'UserPage',

  data() {
    return {
      User: {id: String, email: String},
    }
  },

  computed: {
    userId(): String|null {
      let user = localStorage.getItem('logged_user');
      return user ? JSON.parse(user).id : '';
    }
  },

  apollo: {
    User: {
      query: USER_QUERY,
      variables() {
        return {
          id: this.userId,
        }
      },
    }
  },

  methods: {
    closeModal(): void {
      this.showModal = false;
      this.modalMsg = "";
    },
  }
});
</script>

<style scoped>
.user-info{
  margin: 20px;
}
</style>