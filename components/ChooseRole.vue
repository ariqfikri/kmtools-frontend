<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs11 sm8 md4>
            <v-card
              class="elevation-12 justify-center"
              style="border-style:solid;border-color:#448CCB"
              height="11cm"
            >
              <v-toolbar color="white black--text" dark flat>
                <v-toolbar-title>Click a thing you like</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text v-for="i in button" :key="i.name">
                <v-btn
                  v-model="sendId"
                  style="border-style: solid;border-color:#448CCB;background-color:white"
                  width="9.4cm"
                  :value="i.id"
                  @click="create(i.id)"
                  >{{ i.name }}</v-btn
                >
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      button: [],
      sendId: ''
    }
  },
  beforeMount() {
    this.$axios
      .get('/category')
      .then((response) => {
        console.log(response.data.data)
        this.button = response.data.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },
   methods: {
    create(e) {
      console.log(this.$router)
      this.$axios
        .post('/auth/user/category', {
          id_interest_category: e
        })
        .then(function(response) {
          this.$router.push("/")
          console.log(this)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  }
 
}
</script>
