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
      <v-container>
        <v-form>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <v-container width="80%" class="mt-10">
                <v-row>
                  <v-col cols="12"> &nbsp; </v-col>
                </v-row>
              </v-container>
              <v-container class="mt-8">
                <v-row>
                  <v-col cols="2.5"></v-col>
                  <v-col cols="7">
                    <center>
                      <h2>Recover Password</h2>
                      <p class="mt-10 text-grey">
                        Enter the email associated with your account and we’ll send an email with
                        instructions to reset your password.
                      </p>

                      <div class="mt-5 pe-0 pa-0">
                        <v-text-field
                          class="ma-0 me-0"
                          label="Email Address*"
                          type="text"
                          color="primary"
                          variant="outlined"
                          clearable
                        >
                        </v-text-field>
                      </div>

                      <div class="mt-5">
                        <v-btn class="text-white" block color="primary" @click="false"
                          >Get recover link</v-btn
                        >
                      </div>
                    </center>
                  </v-col>
                  <v-col cols="2.5"></v-col>
                </v-row>
              </v-container>
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-main>

    <footer-div />
  </v-app>
</template>

<style scoped>
.v-btn {
  color: #ffffff !important;
}
</style>
