<template>
  <v-app>
    <v-content>
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
      <v-container v-if="loading" fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card
              class="elevation-12"
              style="border-style:solid;border-color:#448CCB"
            >
              <v-toolbar color="white black--text" dark flat>
                <v-toolbar-title style="margin-left:150px"
                  >Login</v-toolbar-title
                >
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    outlined
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="password"
                    name="password"
                    outlined
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <nuxt-link to="/signup" style="margin-left:100px"
                >Dont have an account? Sign up</nuxt-link
              >
              <v-card-actions>
                <v-row justify="center">
                  <v-btn color="primary" width="345px" @click="login"
                    >Login</v-btn
                  >
                </v-row>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
.label-class {
  display: flex;
  align-items: center;
}
</style>
<script>
import Swal from 'sweetalert2'
/* eslint-disable */
    export default {
        layout: 'empty',
        data() {
            return {
                email: '',
                password: '',
                loading: true
            };
        },
        methods: {
    login() {
      this.loading = false
     this.$auth.loginWith("local", {
        data: {
          email:this.email,
          password:this.password
        }
      }).then((response) => {
        Swal.fire({
        title: 'Welcome to MEMO',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
        // if (this.$auth.loggedIn) { 
          // console.log(user);
           this.$router.push("/");
          // alert("SUKSES BRO");
        // }
      }).catch((error) => {
        Swal.fire({
        title: 'Failed Login',
        icon: 'error'
      })
      this.loading=true
      });
    }
  }
        
    }
</script>