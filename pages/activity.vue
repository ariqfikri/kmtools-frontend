<template>
  <v-app>
    <v-container>
      <v-row
        ><v-col class="d-flex justify-center"
          ><v-avatar size="200px">
            <img src="user-3.png" alt="John" />
          </v-avatar>
        </v-col>
      </v-row>
      <h1 class="display-2 d-flex justify-center pa-2">{{ user.name }}</h1>
      <a class="d-flex justify-center">{{ user.email }}</a>
      <p class="font-weight-medium d-flex justify-center">
        {{ interest.name }}
      </p>
      <v-tabs class="d-flex justify-center">
        <v-tab>Latest Read</v-tab>
      </v-tabs>
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
        <v-row dense class="d-flex justify-center">
          <v-col v-for="card in activity" :key="card.id" cols="8">
            <v-card class="pa-2 ma-1" :to="'/article/' + card.article.id">
              <v-img src="images.png" class=" align-end" height="200px">
                <v-card-title v-text="card.article.title"></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      loading: false,
      user: [],
      interest: [],
      activity: []
    }
  },
  /* eslint-disable */
  beforeMount() {
    this.$axios
      .get('/api/auth/user')
      .then((response) => {
        this.user = response.data.user
        this.interest = response.data.interest_category
      })
      .catch(function(error) {
        console.log(error)
      }),
      this.$axios
      .get('/user/activity/article')
      .then((response) => {
        console.log(response.data.data.activity_history)
        this.activity = response.data.data.activity_history
        this.loading = true
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods:{
    update(){
      this.$axios.put('/auth/user',{
          email: this.user.email,
          username: this.user.username,
          name: this.user.name,
          id_interest_category: this.interest.id
        })
         .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>