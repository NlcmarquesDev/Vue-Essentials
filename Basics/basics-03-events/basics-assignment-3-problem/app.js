const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      setTimeout(() => (this.counter = 0), 5000);
    },
  },
  computed: {
    result() {
      if (this.counter === 37) {
        return this.counter;
      } else if (this.counter < 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
