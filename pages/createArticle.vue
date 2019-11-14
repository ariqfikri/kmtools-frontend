<template>
  <v-card class="mx-auto" max-width="400">
    <v-form>
      <v-text-field solo></v-text-field>
      <v-textarea id="summernote"></v-textarea>
    </v-form>
  </v-card>
</template>
<script>
import $ from 'jquery'
export default {
  mounted() {
    $(document).ready(function() {
      $('#summernote').summernote()
    })
  }
}
</script>
