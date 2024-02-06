const app = Vue.createApp({
  data() {
    return {
      btnStyle: true,
      userInput: "",
      styleInline: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.btnStyle,
        hidden: !this.btnStyle,
      };
    },
  },
  methods: {
    changeStyle() {
      this.btnStyle = !this.btnStyle;
    },
  },
});

app.mount("#assignment");
