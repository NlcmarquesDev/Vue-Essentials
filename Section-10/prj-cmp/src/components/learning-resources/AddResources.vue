<template>
  <base-modal v-if="setModalError" title="Invalid Input" @close="returnBack">
    <template v-slot:default>
      <p>Unfortunately, at leat one input value is invalis.</p>
      <p>
        Please click all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <base-button @click="returnBack">Close</base-button>
    </template>
  </base-modal>
  <base-card>
    <form @submit.prevent="addResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="enteredTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          rows="3"
          v-model="enteredDescription"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="enteredLink" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      setModalError: false,
      errorItem: '',
    };
  },
  inject: ['submitData'],
  methods: {
    addResource() {
      if (
        this.enteredTitle.trim() === '' ||
        this.enteredDescription.trim() === '' ||
        this.$refs.enteredLink.value.trim() === ''
      ) {
        this.setModalError = true;
      } else {
        const newResource = {
          id: 'official-' + this.enteredTitle,
          title: this.enteredTitle,
          description: this.enteredDescription,
          link: this.$refs.enteredLink.value,
        };
        this.submitData(newResource);
        this.enteredTitle = '';
        this.enteredDescription = '';
        this.$refs.enteredLink.value = '';
      }
    },
    returnBack() {
      this.setModalError = false;
    },
  },
};
</script>

<style lang="css" scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
