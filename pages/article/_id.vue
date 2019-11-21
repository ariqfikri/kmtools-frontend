<template>
  <v-app>
    <baca-artikel
      :title="article.title"
      :article="article.content"
    ></baca-artikel>
  </v-app>
</template>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      article: []
    }
  },
  beforeMount() {
    console.log(this.$route.params.id)
    this.$axios
      .get('/article/'+ this.$route.params.id)
      .then((response) => {
        console.log(response.data.data)
        this.article = response.data.data
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>
