<template>
  <div class="bg-grey-lighter flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <input v-model="inputName"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name" />

        <input v-model="inputEmail"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />

        <input v-model="inputPassword"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password" />
        <input v-model="inputPassword"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password" />

        <div class="ml-4 flex items-center md:ml-6 justify-center">
          <div class=" bg-gray-900 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium" >
            <button @click="handleCreateUser">Register</button>
          </div>
        </div>
        <div class="text-grey-dark mt-6 padding">Already have an account?
          <RouterLink to="/" class="no-underline border-b border-blue text-blue" >Login</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {UserStore} from "@/stores/userStore";
import {ref} from "vue";
import router from "@/router";

const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
    router.push('/chat');
}

</script>

<style scoped>
.container { position:relative; }
.container video {
  position:relative;
  z-index:0;
}

.padding {
  padding-left: 30px;
}

.mx-auto {
  margin-left: auto;
  margin-right: 30px;
}
</style>