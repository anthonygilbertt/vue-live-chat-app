<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "@/composables/useLogin.js";
import Chat from "@/views/Chat.vue";
import { useRouter } from "vue-router";

export default {
  components: { Chat },
  setup() {
    const email = ref("");
    const password = ref("");

    const router = useRouter();
    // const route = useRoute();

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      console.log(email.value, password.value);
      await login(email.value, password.value);

      if (!error.value) {
        console.log("user logged in");
        router.push({ name: "Chat" });
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>