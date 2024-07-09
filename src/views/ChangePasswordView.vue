<template>
  <v-app>
    <top-menu />

    <v-main>
      <v-container>
        <v-form @submit.prevent="handleChangePassword">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <v-container width="80%" class="mt-5">
                <v-row>
                  <v-col cols="12"> &nbsp; </v-col>
                </v-row>
              </v-container>
              <v-container class="mt-2">
                <v-row>
                  <v-col cols="2.5"></v-col>
                  <v-col cols="7">
                    <center>
                      <h2>Change Password</h2>
                      <p class="mt-2 text-grey-darken-1" align="left">
                        Your new password must be different from the previous passwords
                      </p>

                      <v-text-field
                        class="mt-5 pe-0 pa-0"
                        label="New password"
                        type="password"
                        color="primary"
                        variant="outlined"
                        clearable
                        v-model="password"
                      />
                      <v-text-field
                        class="mt-5 pe-0 pa-0"
                        label="Re-enter your new password"
                        type="password"
                        color="primary"
                        variant="outlined"
                        clearable
                        v-model="passwordConfirmation"
                      />

                      <input type="hidden" :value="email" />
                      <input type="hidden" :value="token" />

                      <div class="mt-5">
                        <v-btn class="text-white" block color="primary" type="submit"
                          >Change Password</v-btn
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
    <toast-bar :snackbar="snackbar" :text="toastMessage" @update:snackbar="updateSnackbar" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import ToastBar from '../components/ToastBar.vue'
import axios from 'axios'

export default defineComponent({
  name: 'ChangePasswordView',
  components: {
    TopMenu,
    FooterDiv,
    ToastBar
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const email = ref('')
    const token = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')
    const snackbar = ref(false)
    const toastMessage = ref('')

    onMounted(() => {
      email.value = route.query.email as string
      token.value = route.query.token as string
    })

    const handleChangePassword = async () => {
      try {
        await axios.post('user/reset-password-token', {
          email: email.value,
          token: token.value,
          password: password.value,
          password_confirmation: passwordConfirmation.value
        })
        toastMessage.value = 'Password changed successfully!'
        snackbar.value = true
        setTimeout(() => {
          router.push({ name: 'home', query: { showLogin: true } })
        }, 3000)
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'An error occurred'
        toastMessage.value = errorMessage
        snackbar.value = true
      }
    }

    const updateSnackbar = (value: boolean) => {
      snackbar.value = value
    }

    return {
      email,
      token,
      password,
      passwordConfirmation,
      handleChangePassword,
      snackbar,
      toastMessage,
      updateSnackbar
    }
  }
})
</script>

<style scoped>
.text-white {
  color: white !important;
}
</style>
