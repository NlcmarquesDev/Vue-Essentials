<template>
  <section>
    <h2>Name: {{ persona.name }}</h2>
    <h3>Age: {{ persona.age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    persona: {
      type: Object,
    },
  },
};
</script>

<style lang="css">
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
