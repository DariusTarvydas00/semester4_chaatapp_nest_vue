<template>
  <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
    <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div class="relative flex items-center space-x-4">
        <div class="relative">

            <span class="absolute text-green-500 right-0 bottom-0">
               <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
               </svg>
            </span>
          <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
        </div>
        <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center">
            <span class="text-gray-700 mr-3">Anderson Vanhron {{userStore.userName}}</span>
          </div>
          <span class="text-lg text-gray-600">Junior Developer</span>
        </div>
      </div>
    </div>
    <div  id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div v-for="(chat) in chatStore.chats">
        <div class="chat-message" v-if="userStore.userName">
          <div class="flex items-end justify-end">
            <div v-if="chat.user === userStore.userName">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start">
                <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">User: {{chat.user}} text: {{chat.text}} </span></div>
              </div>
              <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2">
            </div>
          </div>
        </div>
        <div class="chat-message" v-else>
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"> User: {{chat.user}} text: {{chat.text}}</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <input v-model="txtChatInput" type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3">
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button @click="sendChat" type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
            <span class="font-bold">Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";
import {UserStore} from "@/stores/userStore";

const userStore = UserStore();
const chatStore = ChatStore();
const txtChatInput = ref("");
const txtRoomInput = ref("");
const txtRoomListener = ref("");

chatStore.getAllRoomMessages();
chatStore.updateTyping();
function sendChat() {
  chatStore.sendMessage({
    text: txtChatInput.value,
    room: txtRoomInput.value,
    user: userStore.userName,
  });
}
function typing() {
  chatStore.isTypingText({
    user: userStore.userName,
    text: txtChatInput.value,
  });
}

function listenToRoom() {
  chatStore.setRoom(txtRoomListener.value);
}


</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>
<!--<template>-->
<!--  <div class="align-left">-->
<!--    <div class="overflow-y-auto h-64 w-64... chatBorder font">-->
<!--      <div v-for="(chat, index) in chatStore.chats" v-bind:key="index">-->
<!--        {{ chat.user }} : {{ chat.text }}-->
<!--      </div>-->
<!--      <ul class="bottom">-->
<!--        <li v-for="(chat, index) in chatStore.isTyping" v-bind:key="index">-->
<!--          {{ chat }} is typing...-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    &lt;!&ndash; bottom section &ndash;&gt;-->
<!--    <div class="send">-->
<!--      <input-->
<!--          v-on:input="typing"-->
<!--          v-model="txtChatInput"-->
<!--          placeholder="Enter chat"-->
<!--          id="myInput"-->
<!--          class="text-holder"-->
<!--      />-->
<!--      <button-->
<!--          class="button-54"-->
<!--          role="button"-->
<!--          @click="sendChat"-->
<!--          onclick="document.getElementById('myInput').value = ''"-->
<!--      >-->
<!--        Send-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ChatStore } from "../stores/chatStore";-->
<!--import { UserStore } from "../stores/userStore";-->
<!--import { ref } from "vue";-->
<!--const userStore = UserStore();-->
<!--const chatStore = ChatStore();-->

<!--const txtChatInput = ref("");-->
<!--chatStore.getAllRoomMessages();-->
<!--chatStore.updateTyping();-->
<!--function sendChat() {-->
<!--  chatStore.sendMessage({-->
<!--    user: userStore.userName,-->
<!--    text: txtChatInput.value,-->
<!--  });-->
<!--}-->
<!--function typing() {-->
<!--  chatStore.isTypingText({-->
<!--    user: userStore.userName,-->
<!--    text: txtChatInput.value,-->
<!--  });-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.bottom {-->
<!--  position: absolute;-->
<!--}-->

<!--.font {-->
<!--  font-family: "Open Sans", sans-serif;-->
<!--}-->

<!--.align-left {-->
<!--  text-align: left;-->
<!--  padding-right: 25px;-->
<!--  padding-left: 25px;-->
<!--  padding-bottom: 25px;-->
<!--}-->
<!--.chatBorder {-->
<!--  border-style: solid;-->
<!--  border-width: 3px;-->
<!--  border-color: black;-->
<!--}-->
<!--.send {-->
<!--  font-family: "Open Sans", sans-serif;-->
<!--  padding-top: 5px;-->
<!--}-->

<!--.text-holder {-->
<!--  font-family: "Open Sans", sans-serif;-->
<!--  border-style: solid;-->
<!--  border-width: 3px;-->
<!--  border-color: black;-->
<!--  padding: 4px;-->
<!--  width: 565px;-->
<!--  box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;-->
<!--  margin-right: 25px;-->
<!--}-->

<!--.button-54 {-->
<!--  font-family: "Open Sans", sans-serif;-->
<!--  font-size: 16px;-->
<!--  letter-spacing: 2px;-->
<!--  text-decoration: none;-->
<!--  text-transform: uppercase;-->
<!--  color: #000;-->
<!--  cursor: pointer;-->
<!--  border: 3px solid;-->
<!--  padding: 0.25em 0.5em;-->
<!--  box-shadow: 1px 1px 0 0, 2px 2px 0 0, 3px 3px 0 0, 4px 4px 0 0, 5px 5px 0 0;-->
<!--  position: relative;-->
<!--  user-select: none;-->
<!--  -webkit-user-select: none;-->
<!--  touch-action: manipulation;-->
<!--}-->

<!--.button-54:active {-->
<!--  box-shadow: 0 0 0 0;-->
<!--  top: 5px;-->
<!--  left: 5px;-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  .button-54 {-->
<!--    padding: 0.25em 0.75em;-->
<!--  }-->
<!--}-->
<!--</style>-->
