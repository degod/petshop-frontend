<script lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    TopMenu,
    FooterDiv
  }
})
</script>

<template>
  <v-app id="inspire" class="">
    <top-menu />

    <v-main> </v-main>

    <footer-div />
  </v-app>
</template>
