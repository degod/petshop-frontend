<template>
  <div class="pa-4 text-center">
    <v-dialog max-width="540">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          variant="outlined"
          class="ml-4 py-2"
          size="large"
          color="white"
          v-bind="activatorProps"
          >Login</v-btn
        >
      </template>
      <template v-slot:default="{ isActive }">
        <v-card class="pa-10">
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
              <h2>Log In</h2>
              <v-form class="mt-2">
                <div>
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
                  <div>
                    <v-checkbox label="Remember me"></v-checkbox>
                  </div>

                  <v-btn class="text-white" block color="primary" @click="isActive.value = false"
                    >Log In</v-btn
                  >
                </div>
              </v-form>

              <div class="d-flex justify-space-between mt-7">
                <router-link to="/recover" @click="isActive.value = false"
                  >Forgot password?</router-link
                >
                <register-modal></register-modal>
              </div>
            </center>
          </template>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisterModal from './RegisterModal.vue'

export default defineComponent({
  name: 'LoginModal',

  components: {
    RegisterModal
  },
  data() {
    return {}
  }
})
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
</style>
