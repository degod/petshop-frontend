<template>
  <div class="text-center">
    <v-btn class="modal-trigger" flat @click="dialog = true">Don't have an account? Sign up</v-btn>

    <v-dialog v-model="dialog" max-width="570" width="auto" class="mt-0">
      <div class="pa-0 ma-0">
        <v-card class="pa-15 pt-4">
          <template v-slot:text>
            <center>
              <v-avatar class="me-0 pa-2" color="primary" size="92">
                <div class="ma-2">
                  <img src="../assets/icons/logo.png" height="42" /><br />
                  <span class="logo-title">petson.</span>
                </div>
              </v-avatar>
            </center>
            <center class="mt-4">
              <h2>Sign Up</h2>
              <v-form class="mt-5">
                <v-row>
                  <v-col col="6">
                    <div class="ma-0 me-0">
                      <v-text-field
                        label="First Name"
                        type="text"
                        color="primary"
                        variant="outlined"
                        clearable
                      >
                      </v-text-field>
                    </div>
                  </v-col>
                  <v-col col="6">
                    <div class="ma-0 me-0">
                      <v-text-field
                        label="Last Name"
                        type="text"
                        color="primary"
                        variant="outlined"
                        clearable
                      >
                      </v-text-field>
                    </div>
                  </v-col>
                </v-row>
                <div class="ma-0 me-0">
                  <v-text-field
                    label="Email"
                    type="text"
                    color="primary"
                    variant="outlined"
                    clearable
                  >
                  </v-text-field>
                </div>
                <div class="ma-0 me-0">
                  <v-text-field
                    label="Phone Number"
                    type="text"
                    color="primary"
                    variant="outlined"
                    clearable
                  >
                  </v-text-field>
                </div>
                <div class="ma-0 me-0">
                  <v-text-field
                    label="Address"
                    type="text"
                    color="primary"
                    variant="outlined"
                    clearable
                  >
                  </v-text-field>
                </div>
                <div class="mt-3 me-0">
                  <v-text-field
                    label="Password"
                    type="password"
                    color="primary"
                    variant="outlined"
                    clearable
                  >
                  </v-text-field>
                </div>
                <div class="mt-3 me-0">
                  <v-text-field
                    label="Confirm Password"
                    type="password"
                    color="primary"
                    variant="outlined"
                    clearable
                  >
                  </v-text-field>
                </div>
                <div class="pa-2 text-left">
                  <v-checkbox
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  ></v-checkbox>
                </div>

                <v-btn class="text-white" block color="primary" @click="dialog = false"
                  >Sign up</v-btn
                >
              </v-form>

              <div class="d-flex justify-center mt-3">
                <router-link to="/recover" @click="dialog = false"
                  >Already have an account? Login</router-link
                >
              </div>
            </center>
          </template>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
a {
  color: #1976d2;
  font-size: 16px;
  text-decoration: none;
}
.logo-title {
  color: #ffffff;
  font-size: 1rem;
}
.v-btn.text-white {
  color: #ffffff !important;
}
.v-card {
  margin-top: -25px !important;
}
.modal-trigger {
  text-transform: initial !important;
  color: #1976d2 !important;
  letter-spacing: normal !important;
  padding: 0px !important;
  margin: 0px !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  margin-top: -5px !important;
}
</style>
