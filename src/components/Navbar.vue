<template>
  <nav>
    <div>
      <p>Hey there... Display Name Here</p>
      <p class="email">Currently Logged in as ... email</p>
    </div>
    <div class="error">{{ error }}</div>
    <button @click="handleSubmit">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout.js";
import { useRouter } from "vue-router";
import Welcome from "@/views/Welcome";

export default {
  components: { Welcome },
  setup() {
    const { error, logout } = useLogout();

    const router = useRouter();

    const handleSubmit = async () => {
      await logout();

      if (!error.value) {
        console.log("User logged out");
        router.push({ name: "Welcome" });
      }
    };

    return { error, handleSubmit };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>