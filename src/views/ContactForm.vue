<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <!-- Form inputs -->
    <div class="form-group">
      <label for="fullName">Full Name:</label>
      <input
        v-model="fullName"
        type="text"
        id="fullName"
        required
        minlength="10"
      />

      <div
        v-if="fullName.length < 10 && fullName.length > 0"
        class="error-message"
      >
        Full name must be at least 10 characters.
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" v-model="message"></textarea>
      <div
        v-if="message.length < 3 && message.length > 0"
        class="error-message"
        >Message must be at least 3 characters.
      </div>
    </div>
    <!-- Other form inputs (email, textarea) -->
    <!-- Submit button -->
    <button type="submit">Submit</button>

    <!-- Display the full name -->
    <!-- <div className="{{ hidden }}"> -->
    <div v-if="hidden">
      <p>Full Name: {{ fullName }}</p>
      <p>Email: {{ email }}</p>
      <p>Message: {{ message }}</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
      hidden: false
    };
  },
  methods: {
    submitForm() {
      if (this.fullName.length >= 10 /* Other validations */) {
        this.confirmation = this.fullName; // Display confirmation message
        this.hidden = true;
      }
    },
  },
  // Other component logic
};
</script>

<style scoped>

.hidden {
  display: none;
}

form {
  max-width: 400px;
  margin: 20px auto;
  background-color: azure;
  text-align: left;
  padding: 10px;
}

input {
  display: block;
  width: 100%;
  color: #333;
  padding: 5px;
  box-sizing: border-box;
}

label {
  display: inline-block;
  margin: 5px 0;
  color: #777;
  font-weight: bold;
}

textarea {
  display: block;
  width: 100%;
  height: 100px;
  color: #333;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.error-message {
  color: red;
  /* Other styles for error messages */
}
</style>
