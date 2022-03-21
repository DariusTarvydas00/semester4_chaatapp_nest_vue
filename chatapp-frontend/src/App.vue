<template>
  <Header></Header>
  <br />
  <RouterView />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import {UserStore} from "@/stores/userStore";
const userStore = UserStore();

function mockData(){
  userStore.createUser('asd','asd@asd.lt','asd');
  userStore.createUser('test1','test1@test1.lt','test1');
  userStore.createUser('test2','test2@test2.lt','test2');
  userStore.createUser('test3','test3@test3.lt','test3');
}

</script>