const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue.js",
      courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://www.vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

const newApp = Vue.createApp({
  data() {
    return {
      titleA: "Mastery!!",
      titleB: "Goals!!",
    };
  },
  methods: {
    changeTitle() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.titleA;
      } else {
        return this.titleB;
      }
    },
  },
});

newApp.mount("#header");
