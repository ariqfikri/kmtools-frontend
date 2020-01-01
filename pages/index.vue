<template>
  <v-app>
    <v-card>
      <v-img :src="gambar"></v-img>
    </v-card>
    <br />
    <v-list-item-action-text class="font-weight-bold display-1"
      >Recommendation Article</v-list-item-action-text
    >
    <div
      v-if="loading == false"
      class="d-flex justify-center"
      style="margin-top:2cm"
    >
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-if="loading" fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" cols="6">
          <v-card class="pa-2 ma-1" :to="'/article/' + card.id">
            <v-img src="/images.png" class=" align-end" height="200px">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="my-2 d-flex justify-end">
      <v-btn text to="allArticle">See More >>></v-btn>
    </div>
    <hr />
    <br />
    <v-list-item-action-text class="font-weight-bold display-1"
      >Latest Article</v-list-item-action-text
    >
    <div
      v-if="loading2 == false"
      class="d-flex justify-center"
      style="margin-top:2cm"
    >
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container v-if="loading2" fluid>
      <v-row dense>
        <v-col v-for="card in error" :key="card.id" cols="6">
          <v-card class="pa-2 ma-1" :to="'/article/' + card.id">
            <v-img src="/images.png" class=" align-end" height="200px">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
   middleware: 'auth',
   props: ['items'],
  data() {
    return {
      loading:false,
      loading2:false,
      gambar: { src: '/kb-header.jpg' },
      cards: [],
      trouble: [],
      error: [{gambar:'/vuejs.jpg'}]
      
    }
  },
  beforeMount() {
    this.$axios
      .get('/api/auth/user')
      .then((response) => {
        
      })
      .catch(function(error) {
        console.log(error)
      }),
      this.$axios
        .get('/article/recommendation')
        .then((response) => {
          console.log(response.data.data.data)
          this.cards = response.data.data.data
          this.loading = true
        })
        .catch(function(error) {
          console.log(error)
        }),
        this.$axios
        .get('/article')
        .then((response) => {
          this.error = response.data.data.data
          this.loading2 = true
        })
        .catch(function(error) {
          console.log(error)
        })
        
  }
}
</script>
