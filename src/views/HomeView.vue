<script lang="ts">
import TopMenu from '@/components/TopMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    TopMenu
  }
})
</script>

<template>
  <v-app id="inspire" class="">
    <top-menu />
  </v-app>
</template>
