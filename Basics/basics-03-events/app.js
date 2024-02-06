const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter() {
      if (this.counter >= 50) {
        this.counter = 0;
      }
    },
    // name() {
    //   if (this.name === "") return (this.fullName = "");
    //   this.fullName = this.name + " " + this.lastName;
    // },
    // lastName() {
    //   if (this.name === "") return (this.fullName = "");
    //   this.fullName = this.name + " " + this.lastName;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") return "";
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
