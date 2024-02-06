<template>
  <header>
    <h1>Hello come to my App</h1>
  </header>
  <div>
    <user-data @add-person="addPerson"></user-data>
  </div>
  <main>
    <ul>
      <active-user
        :persona="person"
        v-for="person in persons"
        :key="person.id"
      ></active-user>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      persons: [],
    };
  },
  methods: {
    addPerson(newPerson) {
      this.persons.push(newPerson);
    },
  },
};
</script>

<style lang="css">
body {
  display: flex;
  justify-content: center;
}
#app header {
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px;
  padding: 20px;
}

#app h1 {
  text-align: center;
}

#app div {
  margin-top: 25px;
}
</style>
