<template>
  <v-app-bar flat scroll-behavior="inverted" color="primary" class="py-2">
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-0" color="" size="32">
        <img src="../assets/icons/logo.png" height="28" />
      </v-avatar>
      <router-link to="/" class="flex justify-center">
        <v-app-bar-title class="m-0 custom-title">petson.</v-app-bar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn class="ml-0 py-2" append-icon="mdi-menu-down" size="large" color="white"
        >Products</v-btn
      >
      <v-btn class="ml-3 py-2" size="large" color="white">Promotions</v-btn>
      <v-btn class="ml-3 py-2" size="large" color="white">Blog</v-btn>
      <v-spacer></v-spacer>

      <v-btn variant="outlined" prepend-icon="mdi-cart" class="ml-4 py-2" size="large" color="white"
        >Cart (0)</v-btn
      >

      <template v-if="!isAuthenticated">
        <login-modal />
      </template>
      <template v-else>
        <v-btn variant="outlined" class="ml-4 py-2" size="large" color="white" @click="logout"
          >Logout</v-btn
        >
        <v-avatar class="me-0 ml-5" color="white" size="46">
          <img src="../assets/images/avatar.png" height="45" />
        </v-avatar>
      </template>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import LoginModal from './LoginModal.vue'
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  name: 'TopMenu',
  components: {
    LoginModal
  },
  setup() {
    const authStore = useAuthStore()

    const isAuthenticated = computed(() => authStore.isAuthenticated)

    const logout = () => {
      authStore.logout()
    }

    return {
      isAuthenticated,
      logout
    }
  }
})
</script>

<style scoped>
.custom-title {
  color: #ffffff;
  font-size: 14px;
}
a {
  text-decoration: none !important;
}
</style>
