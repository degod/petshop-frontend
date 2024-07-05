<template>
  <v-app-bar flat color="primary" class="py-2">
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-0" color="" size="32">
        <img src="../assets/icons/logo.png" height="28" />
      </v-avatar>
      <v-app-bar-title class="m-0 custom-title">petson.</v-app-bar-title>

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
      <v-btn variant="outlined" class="ml-4 py-2" size="large" color="white">Login</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TopMenu',

  data() {
    return {}
  }
})
</script>

<style scoped>
.custom-title {
  color: #ffffff;
  font-size: 14px;
}
</style>
