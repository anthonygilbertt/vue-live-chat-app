<template>
  <div class="container">
    <Navbar />
    <h3>chatroom</h3>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";

export default {
  components: { Navbar },
  setup() {
    //get the current user using the getUser composable
    const { user } = getUser();
    const router = useRouter();

    // Watch the user for changes
    watch(user, (user, prevUser) => {
      router.push({ name: "Welcome" });
    });

    //Redirect the user to the Welcome page when the user logs out

    return { user };
  },
};
</script>

<style scoped>
</style>
