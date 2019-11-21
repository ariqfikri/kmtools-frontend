<template>
  <v-app>
    <v-card>
      <v-img :src="gambar"></v-img>
    </v-card>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.id" cols="4">
          <v-card class="pa-2 ma-1" to="/">
            <v-img :src="card.src" class=" align-end" height="200px">
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text v-text="card.content"></v-card-text>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <hr />
    <br />
    <v-list-item-action-text class="font-weight-bold display-1"
      >Troubleshooting Article</v-list-item-action-text
    >
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in trouble" :key="card.id" cols="8">
          <v-card class="pa-2 ma-1" to="/">
            <v-img :src="card.src" class=" align-end" height="200px">
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text v-text="card.content"></v-card-text>
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
   props: ['items'],
  data() {
    return {
      gambar: { src: '/kb-header.jpg' },
      cards: [],
      trouble: []
      
    }
  },
  mounted() {
    this.$axios
      .get('/api/auth/user')
      .then((response) => {
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error)
      }),
      this.$axios
        .get('/article/recommendation')
        .then((response) => {
          console.log(response.data.data)
          this.cards = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        }),
        this.$axios
        .get('/troubleshoot')
        .then((response) => {
          console.log(response.data.data)
          this.trouble = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
  }
}
</script>
