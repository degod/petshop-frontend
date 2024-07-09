<template>
  <v-app>
    <top-menu />

    <v-main>
      <search-product></search-product>

      <v-container fluid class="px-15">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="9">
                <v-breadcrumbs
                  :items="['Homepage', 'Dogs', 'Dog food', 'Dry dog food', 'Brit Care Endurance']"
                ></v-breadcrumbs>
              </v-col>
              <v-col cols="3"> </v-col>
            </v-row>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>

        <v-container>
          <v-row>
            <v-col cols="7" class="text-center">
              <img src="../assets/images/brit-care-lg.png" width="70%" />
            </v-col>
            <v-col cols="5" class="product-headline">
              <h1>Brit Care</h1>
              <h3>Endurance Duck & Rice</h3>
              <h3>Dry dog food</h3>
              <h2>200 kn</h2>
              <v-row>
                <v-col cols="4">
                  <v-btn prepend-icon="mdi-cart" class="add-btn" size="small" color="primary"
                    >Add to cart</v-btn
                  >
                </v-col>
                <v-col cols="4">
                  <v-btn
                    prepend-icon="mdi-minus"
                    class="ms-auto mr-0 btns"
                    size="small"
                    flat
                    color="grey-lighten-2"
                  ></v-btn>
                  <input type="text" class="qty text-center" disabled value="1" />
                  <v-btn
                    prepend-icon="mdi-plus"
                    class="ms-auto ml-0 btns"
                    size="small"
                    flat
                    color="grey-lighten-2"
                  ></v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-15 mb-15">
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <p>
                Hypoallergenic superpremium complete feed for dogs. lamb & rice formula for adult
                dogs of medium breeds (10 – 25 kg).<br /><br />
              </p>

              <b>Composition:</b>
              <p>
                lamb meat meal (38%), rice (37%), chicken fat, dried apple pulp, salmon oil (2%),
                chicken liver hydrolyzed, brewer´s yeast, glucosamine sulphate (260 mg/kg),
                chondroitine sulphate (160 mg/kg), mannan-oligosaccharides (150 mg/kg),
                fructo-oligosaccharides (100 mg/kg), yucca Mojave (100 mg/kg), inulin (90 mg/kg),
                dried milk thistle (75 mg/kg), dried rosemary (50 mg/kg), dried cloves (50 mg/kg),
                dried citrus (50mg/kg), dried curcuma (50 mg/kg).<br /><br />
              </p>

              <b>Analytical ingredients:</b>
              <p>
                crude protein 26.0%, crude fat 16.0%, moisture 10.0%, crude ash 7.0%, crude fibre
                2.9%, calcium 1.6%, phosphorus 1.3%, sodium 0.2%.<br /><br />
              </p>
              <b>Nutritional composition:</b>
              <p>
                vitamin A (3a672a) 20,000 I.U., vitamin D3 (3a671) 1,500 I.U., vitamin E (3a700) 500
                mg, vitamin C (3a312) 200 mg, choline chloride (3a890) 1,800 mg, biotin (3a880) 0.6
                mg, vitamin B1 (3a821) 5 mg, vitamin B2 (3a825i) 6 mg, niacinamide (3a315) 22 mg,
                calcium-D-pantothenate (3a841) 15 mg, vitamin B6 (3a831) 5 mg, folic acid (3a316)
                0.6 mg, vitamin B12 0.05 mg, zinc (3b606) 80 mg, iron (3b106) 70 mg, manganese
                (3b504) 35 mg, iodine (3b201) 0.65 mg, copper (3b406) 15 mg, selenium (3b810) 0.2
                mg. Contains natural antioxidants: tocopherol extracts from vegetable oil
                (1b306(i)), ascorbyl palmitate (1b304) & rosemary extract.<br /><br />
              </p>
              <b>Metabolizable energy:</b>
              <p>3,820 kcal/kg. Omega 3: 0.36 %, Omega 6: 1.90 %.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>

    <footer-div />
  </v-app>
</template>

<script lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import SearchProduct from '../components/SearchProduct.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductsView',

  components: {
    TopMenu,
    FooterDiv,
    SearchProduct
  }
})
</script>

<style scoped>
.product-headline {
  align-content: center;
  align-items: center;
}
.product-headline h1 {
  font-size: 35px;
  font-weight: 400;
}
.product-headline h3 {
  font-size: 26px;
  font-weight: 400;
  color: grey;
}
.product-headline h2 {
  font-size: 45px;
  font-weight: 300;
  margin-top: 24px;
}
.qty {
  width: 40px;
  border: 1px solid grey;
}
.add-btn {
  color: white !important;
}
</style>
