<template>
  <form @submit.prevent="addFriend">
    <div class="form-group">
      <label for="">Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Phone:</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label for="">Email:</label>
      <input type="email" v-model="email" />
    </div>
    <button type="submit">Create Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  emits: ["add-friend"],
  methods: {
    addFriend() {
      const newFriend = {
        id: this.name,
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: false,
      };
      this.$emit("add-friend", newFriend);
    },
  },
};
</script>

<style></style>
