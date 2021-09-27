<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignup.js";
import { useRouter } from "vue-router";
import Chatroom from "@/views/Chatroom.vue";

export default {
  components: { Chatroom },
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      console.table(displayName.value, email.value, password.value);
      await signup(email.value, password.value, displayName.value);
      console.log("User signed up");

      if (!error.value) {
        console.log("user logged in");
        router.push({ name: "Chatroom" });
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>