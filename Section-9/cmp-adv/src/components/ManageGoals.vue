<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="text" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="setError">
      <h3>Please insert a value input...</h3>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      setError: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.text.value;
      if (enteredValue == "") {
        this.setError = true;
      }
    },
    confirmError() {
      this.setError = false;
    },
  },
};
</script>

<style lang="css" scoped></style>
