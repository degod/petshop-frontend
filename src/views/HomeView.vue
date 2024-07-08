<template>
  <v-app>
    <top-menu />

    <v-main>
      <v-container>
        <search-product></search-product>

        <div class="pa-10 pt-0">
          <div id="banner">
            <span class="trans-bg sale-text">Up to 30% sale</span><br />
            <span class="trans-bg">On select dog food and toys</span>
          </div>
        </div>

        <h1 class="section-header">Dry dog food</h1>
        <v-slide-group class="pa-4 mb-10" center-active show-arrows>
          <v-slide-group-item v-for="n in 20" :key="n">
            <v-card flat class="pa-4 mx-4" height="350" width="220" @click="productsPage()">
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
          </v-slide-group-item>
        </v-slide-group>

        <v-container class="pa-10 pt-2">
          <div class="ma-10">
            <v-row>
              <v-col cols="7">
                <img src="../assets/images/dogs.png" width="100%" />
              </v-col>
              <v-col cols="5" class="dog-center-text">
                <h1 class="section-header pl-0 mb-2">Treat your pup</h1>
                <font class="pa-2 ml-3">Discover our dog treat selection</font>
              </v-col>
            </v-row>
          </div>
        </v-container>

        <h1 class="section-header">Pet treats and chew</h1>
        <v-slide-group class="pa-4 mb-10" center-active show-arrows>
          <v-slide-group-item v-for="n in 20" :key="n">
            <v-card flat class="pa-4 mx-4" height="350" width="220" @click="productsPage()">
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
          </v-slide-group-item>
        </v-slide-group>

        <v-container class="pa-10 pt-2">
          <div class="ma-10">
            <v-row>
              <v-col cols="5" class="dog-center-text">
                <h1 class="section-header pl-0 mb-2">Get the best tips</h1>
                <font class="pa-2 ml-3">Read our blog</font>
              </v-col>
              <v-col cols="7">
                <img src="../assets/images/cats.png" width="100%" />
              </v-col>
            </v-row>
          </div>
        </v-container>
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
import SearchProduct from '../components/SearchProduct.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    TopMenu,
    FooterDiv,
    SearchProduct
  },
  setup() {
    const productsPage = () => {
      router.push({ path: '/products' })
    }
    return {
      productsPage
    }
  }
})
</script>

<style scoped>
#banner {
  height: 400px;
  background-image: url(../assets/images/main-bg.png);
  background-repeat: none;
  background-position: center;
  background-size: cover;
  margin: 0px 35px;
  padding: 30px 40px;
}
.section-header {
  margin-left: 10px;
  padding: 20px 63px 0;
  color: #4ec690;
  font-weight: 300;
  font-size: 50px;
}
.trans-bg {
  background: rgb(204, 204, 204);
  background: rgba(122, 116, 116, 0.5);
}
span.trans-bg {
  color: white;
  padding: 10px;
  font-size: 18px;
  display: inline-block;
  font-weight: 500;
}
.sale-text {
  font-weight: 300 !important;
  font-size: 50px !important;
  margin-bottom: 7px;
}
.dog-center-text {
  align-content: center;
}
.dog-center-text h1 {
  margin-top: -50px;
  font-size: 46px !important;
}
.dog-center-text font {
  color: white;
  background-color: #4ec690;
  font-size: 16px;
}
</style>
