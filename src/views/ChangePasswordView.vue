<template>
  <v-app>
    <top-menu />

    <v-main>
      <v-container>
        <v-form>
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

                      <div class="mt-5 pe-0 pa-0">
                        <v-text-field
                          class="ma-0 me-0"
                          label="New password"
                          type="password"
                          color="primary"
                          variant="outlined"
                          clearable
                        >
                        </v-text-field>
                      </div>
                      <div class="mt-5 pe-0 pa-0">
                        <v-text-field
                          class="ma-0 me-0"
                          label="Re-enter your new password"
                          type="password"
                          color="primary"
                          variant="outlined"
                          clearable
                        >
                        </v-text-field>
                      </div>

                      <div class="mt-5">
                        <v-btn
                          class="text-white"
                          block
                          color="primary"
                          @click="handleChangePassword"
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

    <message-modal :message="modalMessage"></message-modal>
    <footer-div />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TopMenu from '../components/TopMenu.vue'
import FooterDiv from '../components/FooterDiv.vue'
import MessageModal from '../components/MessageModal.vue'

export default defineComponent({
  name: 'ChangePasswordView',
  components: {
    TopMenu,
    FooterDiv,
    MessageModal
  },
  setup() {
    const showCustomSelector = ref(false)
    const modalMessage = ref('')

    const toggleCustomSelection = () => {
      showCustomSelector.value = !showCustomSelector.value
    }

    const handleChangePassword = () => {
      modalMessage.value = 'Password changed successfully!'
      toggleCustomSelection()
    }

    return {
      showCustomSelector,
      toggleCustomSelection,
      handleChangePassword,
      modalMessage
    }
  }
})
</script>

<style scoped>
.text-white {
  color: white !important;
}
</style>
