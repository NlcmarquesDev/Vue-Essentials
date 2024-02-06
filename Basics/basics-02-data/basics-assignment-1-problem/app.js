const app = Vue.createApp({
  data() {
    return {
      name: "Nuno Marques",
      age: 39,
      images:
        "https://www.fft.fr/sites/default/files/styles/image_16_9/public/padel_wilson_1-min.jpg?h=0737027a&itok=6Dx7GVX7",
      // text: "Insert your name...",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
