const app = Vue.createApp({
  data() {
    return {
      outputDirect: "",
      secondOutput: "",
      outputEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("You press the button , and i came to see you!!!!");
    },
    firstInput(e) {
      this.outputDirect = e.target.value;
    },
    secondInput(e) {
      this.secondOutput = e.target.value;
    },
    enterInput() {
      this.outputEnter = this.secondOutput;
    },
  },
});

app.mount("#assignment");
