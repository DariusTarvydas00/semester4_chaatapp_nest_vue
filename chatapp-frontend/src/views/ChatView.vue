<template>
  <h2>Send chat</h2>
  <input v-model="txtChatInput" placeholder="Enter chat" /> <br />
  <input v-model="txtRoomInput" placeholder="Enter room" /> <br />
  <button @click="sendChat">Send</button>
  <h2>All chats:</h2>
  <input v-model="txtRoomListener" placeholder="Enter room name" /> <br />
  <button @click="listenToRoom">Connect</button>
  <ul>
    <li v-for="(chat, index) in chatStore.chats" v-bind:key="index">
      {{ chat.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: txtRoomInput.value });
}

</script>

<style scoped>

</style>