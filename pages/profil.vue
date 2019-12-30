<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-avatar size="300px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
        <v-col style="margin-top:70px">
          <h1 class="display-2">{{ user.username }}</h1>
          <br />
          <a>{{ user.email }}</a>
        </v-col>
      </v-row>
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
      <v-container v-if="loading" style="margin-top:40px;margin-left:50px">
        <h2>Account</h2>
        <v-row>
          <v-col>
            <br />

            <p class="font-weight-medium">Email</p>
            <br />
            <br />
            <p class="font-weight-medium">Username</p>
            <br />
            <br />
            <p class="font-weight-medium">Name</p>
            <br />
            <br />
            <p class="font-weight-medium">Role</p>
          </v-col>
          <v-col style="margin-right:300px">
            <v-text-field v-model="user.email" outlined rounded></v-text-field>
            <v-text-field
              v-model="user.username"
              outlined
              rounded
            ></v-text-field>
            <v-text-field v-model="user.name" outlined rounded></v-text-field>
            <v-select
              v-model="id"
              rounded
              :items="button"
              name="items"
              :label="interest.name"
              item-text="name"
              item-value="id"
              solo
            ></v-select>
            <v-spacer></v-spacer
            ><v-btn color="primary" @click="update">Save Changes</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      user: [],
      interest: [],
      button: [],
      loading: false,
      id: -1
      // items: ['Frontend', 'Backend', 'UI/UX'],
      // value: [1, 2, 3]
    }
  },
  /* eslint-disable */
  beforeMount() {
    this.$axios
      .get('/api/auth/user')
      .then((response) => {
        console.log(response.data)
        this.user = response.data.user
        this.interest = response.data.interest_category
        this.loading = true
      })
      .catch(function(error) {
        console.log(error)
      }),
      this.$axios
      .get('/category')
      .then((response) => {
        console.log(response.data.data)
        this.button = response.data.data
        this.loading = true
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods:{
    update(e){
      this.$axios.put('/auth/user',{
          email: this.user.email,
          username: this.user.username,
          name: this.user.name,
          id_interest_category: this.id
        })
         .then(function(response) {
           Swal.fire({
        title: 'Updated',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
