<template>
  <v-dialog max-width="540" :model-value="modelValue" @update:model-value="updateModelValue">
    <center>
      <v-card width="400">
        <template v-slot:text>
          <center class="mt-4">
            <v-alert
              text="For demo purpose, we are using a URL token"
              type="info"
              variant="tonal"
            ></v-alert>
            <div class="d-flex justify-space-between mt-7 px-7">
              <p class="text-wrap full">{{ message }}</p>
            </div>
          </center>
        </template>
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="close"></v-btn>
        </template>
      </v-card>
    </center>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageModal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const close = () => {
      emit('update:modelValue', false)
    }

    const updateModelValue = (value: Boolean) => {
      emit('update:modelValue', value)
    }

    return {
      close,
      updateModelValue
    }
  }
})
</script>

<style scoped>
.text-wrap {
  width: 100%;
}
</style>
