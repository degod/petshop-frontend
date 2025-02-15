<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="isDialogActive" max-width="540">
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
      <v-card class="pa-10">
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
          <v-form class="mt-2" @submit.prevent="submit">
            <div>
              <div class="ma-0 me-0">
                <v-text-field
                  label="Email"
                  type="text"
                  color="primary"
                  variant="outlined"
                  name="email"
                  clearable
                ></v-text-field>
              </div>
              <div class="mt-3 me-0">
                <v-text-field
                  label="Password"
                  type="password"
                  color="primary"
                  variant="outlined"
                  name="password"
                  clearable
                ></v-text-field>
              </div>
              <div>
                <v-checkbox label="Remember me"></v-checkbox>
              </div>
              <v-btn type="submit" class="text-white" block color="primary">Log In</v-btn>
            </div>
          </v-form>
          <div class="d-flex justify-space-between mt-7">
            <router-link to="/recover" @click="isDialogActive = false"
              >Forgot password?</router-link
            >
            <register-modal></register-modal>
          </div>
        </center>
      </v-card>
    </v-dialog>
  </div>
  <toast-bar :snackbar="snackbar" :text="text" @update:snackbar="updateSnackbar" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RegisterModal from './RegisterModal.vue'
import ToastBar from '../components/ToastBar.vue'
import axios from 'axios'
import { useAuthStore } from '../stores/auth'

export default defineComponent({
  name: 'LoginModal',
  components: {
    RegisterModal,
    ToastBar
  },
  setup() {
    const authStore = useAuthStore()
    const isDialogActive = ref(false)
    const snackbar = ref(false)
    const text = ref('')

    const updateSnackbar = (togul: boolean, msg: string) => {
      snackbar.value = togul
      text.value = msg
    }

    const submit = async (event: Event) => {
      const formData = new FormData(event.target as HTMLFormElement)

      try {
        const response = await axios.post('user/login', formData)

        const token = response.data.data.token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        authStore.setToken(token)

        isDialogActive.value = false
        updateSnackbar(true, 'Login Successful')
      } catch (error) {
        updateSnackbar(true, 'Login failed: ' + error.message)
      }
    }

    return {
      isDialogActive,
      submit,
      text,
      snackbar,
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
</style>
