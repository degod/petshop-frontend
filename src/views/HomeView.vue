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
  <v-app>
    <top-menu />

    <v-main>
      <!-- <v-container>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-form class="mt-10">
              <v-container width="80%">
                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col cols="8">
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      label="Search products"
                      type="text"
                      color="primary"
                      variant="outlined"
                      clearable
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-carousel show-arrows="hover" cycle hide-delimiter-background height="580">
              <v-carousel-item src="" cover></v-carousel-item>
              <v-carousel-item src="" cover></v-carousel-item>
              <v-carousel-item src="" cover></v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container> -->
    </v-main>

    <footer-div />
  </v-app>
</template>
