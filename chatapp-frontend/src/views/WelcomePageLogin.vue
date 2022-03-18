<template>
  <div class=" flex flex-col">
    <div class="container top-1 ">
      <video autoplay muted loop id="myVideo">
        <source src="src/assets/bg_video1.mp4" type="video/mp4">
      </video>
    </div>
      <Login class="container mx-auto"></Login>
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/Login.vue";
</script>

<style scoped>
.container {
  position:relative;
}

.mx-auto {
  margin-left: auto;
  margin-right: 30px;
}

.container video {
  position:relative;
  z-index:0;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

</style>