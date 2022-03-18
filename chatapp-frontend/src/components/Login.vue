<template>
  <div class=" flex flex-col">
    <div class="container top-1  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign In</h1>
        <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
        <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
        <div class="ml-4 flex items-center md:ml-6 justify-center">
          <div class=" bg-gray-900 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium" >
            <RouterLink to="/welcomePageRegister" >Sign In</RouterLink>
          </div>
        </div>
        <div class="text-grey-dark mt-6 padding">Do not have an account?
          <RouterLink to="/welcomePageRegister" class="no-underline border-b border-blue text-blue" >Register</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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