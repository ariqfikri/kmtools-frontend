<template>
  <v-app>
    <v-list-item-action-text class="font-weight-bold display-1"
      >Articles</v-list-item-action-text
    >
    <div
      v-if="loading == false"
      class="d-flex justify-center"
      style="margin-top:5cm"
    >
      <v-progress-circular
        :size="100"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-if="loading" fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" cols="6">
          <v-card class="pa-2 ma-1" :to="'/article/' + card.id">
            <v-img src="images.png" class=" align-end" height="200px">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <br />
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="pages.last_page"
          circle
          @input="next"
        ></v-pagination>
      </div>
    </v-container> </v-app
></template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      loading:false,
      gambar: { src: '/kb-header.jpg' },
      cards: [],
      pages:[],
      page:0
    }
  },
  mounted() {
      this.$axios
        .get('/article')
        .then((response) => {
          console.log(response.data.data.data)
           console.log(response.data.data)
          this.cards = response.data.data.data
          this.loading = true
          this.pages = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
  },
  methods:{
    next(page){
      this.$axios
        .get('/article?page='+ page)
        .then((response) => {
          console.log(response.data.data.data)
           console.log(response.data.data)
          this.cards = response.data.data.data
          this.pages = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
