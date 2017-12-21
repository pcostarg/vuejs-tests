<template>
  <div>
      <h1>This is a great Message!</h1>
      <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>
<script>
import Input from "./Input.vue";
export default {
  data() {
    return {
      message: 'This is a great Message!'
    };
  },
  components: {
    "app-input": Input
  }
};
</script>
