<template>
  <v-app>
    <top-menu />

    <v-main>
      <v-container>
        <v-form @submit.prevent="submit">
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
                          name="email"
                          v-model="email"
                        />
                      </div>

                      <div class="mt-5">
                        <v-btn class="text-white" block color="primary" type="submit"
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
    <message-modal v-model:modelValue="showCustomSelector" :message="modalMessage" />
    <toast-bar :snackbar="snackbar" :text="toastMessage" @update:snackbar="updateSnackbar" />
  </v-app>
</template>

<script lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import MessageModal from '../components/MessageModal.vue'
import ToastBar from '../components/ToastBar.vue'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RecoverView',
  components: {
    TopMenu,
    FooterDiv,
    MessageModal,
    ToastBar
  },
  setup() {
    const email = ref('')
    const showCustomSelector = ref(false)
    const modalMessage = ref('')
    const snackbar = ref(false)
    const toastMessage = ref('')
    const router = useRouter()

    const submit = async () => {
      try {
        const response = await axios.post('user/forgot-password', { email: email.value })
        const resetToken = response.data.data.reset_token
        modalMessage.value = `Reset token: ${resetToken}. Click <a href="/change-password?email=${email.value}&token=${resetToken}">here</a> to change your password.`
        showCustomSelector.value = true
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
      submit,
      showCustomSelector,
      modalMessage,
      snackbar,
      toastMessage,
      updateSnackbar
    }
  }
})
</script>

<style scoped>
.v-btn {
  color: #ffffff !important;
}
</style>
