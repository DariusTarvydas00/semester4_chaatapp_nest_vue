<template>
  <h2>Let's create a user:</h2>
  <input v-model="inputName" placeholder="Enter name" /> <br />
  <input v-model="inputEmail" placeholder="Enter email" /><br />
  <input v-model="inputPassword" placeholder="Enter password" /><br />
  <button @click="handleCreateUser">Create</button>
</template>

<script setup lang="ts">

import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
}

</script>

<style scoped>

</style>
