<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card
              class="elevation-12"
              style="border-style:solid;border-color:#448CCB"
            >
              <v-toolbar color="white black--text" dark flat>
                <v-toolbar-title>Create your account</v-toolbar-title>
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
                  <v-text-field
                    v-model="name"
                    label="Name"
                    name="Name"
                    outlined
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="Username"
                    outlined
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-btn color="primary" width="9.4cm" @click="signup"
                    >Agree and Sign up</v-btn
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
/* eslint-disable */
import Swal from 'sweetalert2'
    export default {
      
        mounted() {
            console.log('Component mounted.')
        },
        props:{
          namebutton:{
            type:String,
            default:null
          },
          width:{
            type:String,
            default:null
          },
          title:{
            type:String,
            default:null
          },
          
        },
        data(){
          return {
            email:'',
            name:'',
            password:'',
            username:''
          }
        },
        methods: {
    signup() {
       
     this.$axios.post('/register', {
     email: this.email,
     name:this.name,
     password: this.password,
     username:this.username   
  })
  .then( (response) => {
    console.log(response);
    Swal.fire({
  title: 'Success',
  icon: 'success',
  confirmButtonText: 'Cool'
})
    this.$auth.loginWith("local", {
        data: {
          email:this.email,
          password:this.password
        }
      }).then((response) => {
        // if (this.$auth.loggedIn) { 
          // console.log(user);
          this.$router.push("/role");
          // alert("SUKSES BRO");
        // }
      }).catch((error) => alert(error));
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
        
    }
</script>