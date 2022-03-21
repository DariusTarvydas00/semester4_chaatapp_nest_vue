<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="/"><img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a>
        </div>
        <div class="flex items-center" v-if="userStore.userName.length > 0">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <SearchBar></SearchBar>
              <router-link to="/groupChat" tag="button" class="text-amber-50">Group Chat</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block" v-if="userStore.userName.length > 0">
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <Menu as="div" class="ml-3 relative">
              <div class="flex items-center justify-between h-16">
                <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem  v-slot="{ active }">
                    <a :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                      <div class="mt-3 px-2 space-y-1">
                        <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                          <button>Your Profile</button>
                        </DisclosureButton>
                        <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                          <button>Settings</button>
                        </DisclosureButton>
                        <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                          <button @click="signOut">Sign out</button>
                        </DisclosureButton>
                      </div>
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="ml-4 flex items-center md:ml-6 " v-else>
          <div class=" bg-gray-900 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium" >
<!--            <RouterLink to="/login">Sign In</RouterLink>-->
          </div>
        </div>
        <div class="-mr-2 flex md:hidden" v-if="userStore.userName.length > 0">
          <!-- Mobile menu button -->
          <DisclosureButton class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <!--                          <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />-->
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">{{ userStore.name }}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{{ userStore.email }}</div>
          </div>
          <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
            <button>Your Profile</button>
          </DisclosureButton>
          <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
            <button>Settings</button>
          </DisclosureButton>
          <DisclosureButton class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
            <button @click="signOut">Sign out</button>
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import {UserStore} from "@/stores/userStore";
import SearchBar from "@/components/SearchBar.vue";
import {useRouter} from "vue-router";
const router = useRouter();


const user = {
  name: 'Tom Hanks',
  email: 'tom@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userStore = UserStore();
const navigation = [
  { name: 'Home', routerLink: '/', current: true },
  { name: 'Chat', routerLink: '/Chat', current: false },
  { name: 'Register', routerLink: '/createUser', current: false },
  { name: 'Group Chat', href: '/groupChat', current: false },
]

function signOut() {
  userStore.$reset();
  router.push('/')
}
</script>

<style scoped>
.max-w-7xl{
  max-width: 180rem;
}
</style>