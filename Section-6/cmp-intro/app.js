const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manel",
          name: "Manuel Lorenz",
          phone: "0465812564",
          email: "manel@htomail.com",
        },
        {
          id: "Julie",
          name: "Julie Lorenz",
          phone: "0465886154",
          email: "julie@htomail.com",
        },
      ],
    };
  },
  methods: {},
});
app.component("friend-contact", {
  template: `  
  <li >
    <h2>{{friend.name}}</h2>
    <button @click="showDetails">Show Details</button>
    <ul v-if="showBox">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      showBox: false,
      friend: {
        id: "manel",
        name: "Manuel Lorenz",
        phone: "0465812564",
        email: "manel@htomail.com",
      },
    };
  },
  methods: {
    showDetails() {
      this.showBox = !this.showBox;
    },
  },
});

app.mount("#app");
