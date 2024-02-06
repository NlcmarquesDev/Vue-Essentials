const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
        this.boxBSelected = false;
        this.boxCSelected = false;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
        this.boxASelected = false;
        this.boxCSelected = false;
      } else {
        this.boxCSelected = !this.boxCSelected;
        this.boxBSelected = false;
        this.boxASelected = false;
      }
    },
  },
});

app.mount("#styling");
