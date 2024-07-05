<template>
  <v-footer app color="secondary" height="240">
    <v-container>
      <div class="base-cont">
        <v-row justify="center">
          <v-col cols="12" sm="3" justify-center>
            <v-container class="pa-0">
              <v-row justify="center">
                <v-col cols="12" sm="6">
                  <v-avatar class="me-0" color="" size="60">
                    <img src="../assets/icons/logo-green.png" height="52" /> </v-avatar
                  ><br />
                  <span class="footer-title">petson.</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <ul>
                    <li><b>Petson</b></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Store locator</a></li>
                  </ul>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="3">
            <ul>
              <li><b>Contact</b></li>
              <li><a href="mailto:contact@petson">contact@petson</a></li>
              <li>+385 000 000</li>
              <li>35 Shnauzer avenue, Dogville AL</li>
            </ul>
          </v-col>
          <v-col cols="12" sm="3">
            <ul>
              <li><b>Information</b></li>
              <li><a href="#">Ordering and shipping</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">GDPR statement</a></li>
            </ul>
          </v-col>
          <v-col cols="12" sm="3">
            <p class="mt-4 text-grey-darken-1">
              If you can't find answer to your question, please contact our
              <a href="#">customer service</a>
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterDiv',

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
ul > li {
  list-style: none;
  color: #00000061;
}
ul > li > a {
  text-decoration: none;
  color: var(--text-grey-darken-1);
}
ul > li > b {
  color: #000000;
}
a {
  text-decoration: none;
}
.footer-title {
  color: #4ec690;
}
.base-cont {
  padding: 0px 65px;
}
</style>
