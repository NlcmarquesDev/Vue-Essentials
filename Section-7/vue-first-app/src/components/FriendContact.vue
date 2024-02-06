<template>
  <li>
    {{ name }} {{ isFavorite ? "(Favorite)" : "" }}
    <hr />
    <button @click="toggleDetails">
      {{ !detailsAreVisible ? "Show" : "Hide" }} Details
    </button>
    <button @click="toggleFavorite">Toogle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phone }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend()">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phone", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id missing");
        return false;
      }
    },
    "delete-friend": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id missing");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,

      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>

<style lang="css" scoped></style>
