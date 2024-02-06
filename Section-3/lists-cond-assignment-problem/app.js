const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      updateInput: "",
      handlerBlock: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.handlerBlock ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    handlerBlokShow() {
      this.handlerBlock = !this.handlerBlock;
    },
    updateTask(index) {
      this.tasks.splice(index, 1);
      this.tasks.push(this.updateInput);
      this.updateInput = "";
    },
  },
});

app.mount("#assignment");
