<template>
  <v-app>
    <top-menu />

    <v-main>
      <v-container>
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
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container>

      <v-container fluid class="px-15">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <h1 class="section-header">Dry dog food</h1>
            <v-row>
              <v-col cols="9">
                <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
              </v-col>
              <v-col cols="3" class="dog-center-text">
                <v-select
                  label="Select"
                  :items="['Lowest price first', 'Highest price first']"
                  :value="'Lowest price first'"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>

        <div style="border: 1px solid red; margin: 0 50px">
          <v-row class="mx-20">
            <v-col cols="2">
              <v-expansion-panels>
                <v-expansion-panel title="Price">
                  <v-expansion-panel-text>
                    <v-slider v-model="slider1" thumb-label></v-slider>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel title="Brand">
                  <v-expansion-panel-text>
                    <span v-for="i in 6" :key="i">Product {{ i }}</span>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="8">
              <div v-for="n in 5" :key="n">
                <v-row>
                  <v-col cols="4" v-for="m in 3" :key="m">
                    <v-card
                      flat
                      class="ma-4"
                      height="320"
                      width="220"
                      @click="productDetailsPage()"
                    >
                      <div class="d-flex align-center justify-center">
                        <v-scale-transition>
                          <img src="../assets/images/brit-care.png" />
                        </v-scale-transition>
                      </div>
                      <div class="pa-5">
                        <h4>Brit care endurance</h4>
                        <font>Animonda</font>
                        <h2 class="mb-4">200 kn</h2>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>

    <footer-div />
  </v-app>
</template>

<script lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import { defineComponent } from 'vue'
import router from '../router/index'

export default defineComponent({
  name: 'ProductsView',

  components: {
    TopMenu,
    FooterDiv
  },
  setup() {
    const productDetailsPage = () => {
      router.push({ path: '/product-details' })
    }

    return {
      productDetailsPage
    }
  }
})
</script>

<style scoped>
.section-header {
  margin-left: 10px;
  padding: 20px 63px 0 3px;
  color: #4ec690;
  font-weight: 300;
  font-size: 50px;
}
</style>
