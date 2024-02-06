<template>
  <section>
    <form @submit.prevent="addPerson">
      <div>
        <label for="">Enter Your name:</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label for="">Enter Your age:</label>
        <input type="text" v-model="enteredAge" />
      </div>
      <button type="submit">Add</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-person"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addPerson() {
      const newPerson = {
        id: new Date().toISOString(),
        name: this.enteredName,
        age: this.enteredAge,
      };
      this.$emit("add-person", newPerson);
    },
  },
};
</script>

<style lang="css"></style>
