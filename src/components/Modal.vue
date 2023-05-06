<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <a class="modal-close" @click="closeModal">&times;</a>
      <div class="modal-content">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicModal',
    props: {
        msg: String
    },

    methods: {
      closeModal(): void {
        this.$emit('close');
      }
    }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  background: #2a39436e;
  z-index: 100;
  visibility: visible;
}
.modal-body {
  position: relative;
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  transition: all 5s ease-in-out;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 12px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.modal-close:hover {
  color: #696161;
  cursor: pointer;
}
.modal-content {
  max-height: 30%;
  overflow: auto;
  margin-top: 10px;
}
</style>