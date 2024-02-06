const app = Vue.createApp({
  data() {
    return { goals: [], inputUser: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputUser);
      this.inputUser = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
