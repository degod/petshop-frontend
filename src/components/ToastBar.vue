<template>
  <div class="text-center ma-2">
    <v-snackbar :model-value="snackbar" @update:model-value="updateModelValue">
      {{ text }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="close"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToastBar',
  props: {
    snackbar: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  emits: ['update:snackbar'],
  setup(props, { emit }) {
    const close = () => {
      emit('update:snackbar', false)
    }

    const updateModelValue = (value: Boolean) => {
      emit('update:snackbar', value)
    }

    return {
      close,
      updateModelValue
    }
  }
})
</script>

<style scoped></style>
