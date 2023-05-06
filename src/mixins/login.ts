import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    checkLogin(): boolean {
      return localStorage.getItem("logged_user") ? true : false;
    }
  }
})