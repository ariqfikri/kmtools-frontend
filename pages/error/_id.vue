<template>
  <v-app>
    <v-flex align-center>
      <v-card width="16cm" class="mx-auto">
        <v-card-title v-text="error.title"></v-card-title>
        <v-card-text v-text="error.content"></v-card-text>
        <div class="d-flex justify-end">
          <v-btn class="primary ma-2">Answer</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-app>
</template>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      error: []
    }
  },
  beforeMount() {
    console.log(this.$route.params.id)
    this.$axios
      .get('/error-report/'+ this.$route.params.id)
      .then((response) => {
        console.log(response.data.data)
        this.error = response.data.data
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>
