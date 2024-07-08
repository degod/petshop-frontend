<template>
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-form class="mt-10">
          <v-container width="80%">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  label="Search products"
                  type="text"
                  color="primary"
                  variant="outlined"
                  clearable
                >
                </v-text-field>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchProduct'
})
</script>

<style scoped></style>
