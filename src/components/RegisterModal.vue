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
              <v-form class="mt-5" @submit.prevent="submit">
                <v-row>
                  <v-col col="6">
                    <div class="ma-0 me-0">
                      <v-text-field
                        label="First Name"
                        type="text"
                        color="primary"
                        variant="outlined"
                        clearable
                        name="first_name"
                      />
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
                        name="last_name"
                      />
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
                    name="email"
                  />
                </div>
                <div class="ma-0 me-0">
                  <v-text-field
                    label="Phone Number"
                    type="text"
                    color="primary"
                    variant="outlined"
                    clearable
                    name="phone_number"
                  />
                </div>
                <div class="ma-0 me-0">
                  <v-text-field
                    label="Address"
                    type="text"
                    color="primary"
                    variant="outlined"
                    clearable
                    name="address"
                  />
                </div>
                <div class="mt-3 me-0">
                  <v-text-field
                    label="Password"
                    type="password"
                    color="primary"
                    variant="outlined"
                    clearable
                    name="password"
                  />
                </div>
                <div class="mt-3 me-0">
                  <v-text-field
                    label="Confirm Password"
                    type="password"
                    color="primary"
                    variant="outlined"
                    clearable
                    name="password_confirmation"
                  />
                </div>
                <div class="pa-2 text-left">
                  <v-checkbox
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    name="is_marketing"
                  ></v-checkbox>
                </div>

                <v-btn type="submit" class="text-white" block color="primary">Sign up</v-btn>
              </v-form>

              <toast-bar :snackbar="snackbar" :text="text" @update:snackbar="updateSnackbar" />

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
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import ToastBar from '../components/ToastBar.vue'

export default defineComponent({
  name: 'RegisterModal',
  components: {
    ToastBar
  },
  setup() {
    const authStore = useAuthStore()
    const dialog = ref(false)
    const snackbar = ref(false)
    const text = ref('')

    const updateSnackbar = (togul: boolean, msg: string) => {
      snackbar.value = togul
      text.value = msg
    }

    const submit = async (event: Event) => {
      const formData = new FormData(event.target as HTMLFormElement)
      try {
        const response = await axios.post('user/create', formData)

        const token = response.data.data.token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        authStore.setToken(token)

        dialog.value = false
        updateSnackbar(true, 'Registration Successful')
      } catch (error) {
        updateSnackbar(true, 'Registration failed: ' + error.message)
      }
    }

    return {
      dialog,
      submit,
      snackbar,
      text,
      updateSnackbar
    }
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
