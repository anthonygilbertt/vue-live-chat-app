<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
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
