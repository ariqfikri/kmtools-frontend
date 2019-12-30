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
                <v-toolbar-title>{{ title }}</v-toolbar-title>
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
              <v-card-actions>
                <v-row justify="center">
                  <v-btn color="primary" :width="width" @click="login">{{
                    namebutton
                  }}</v-btn>
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
          }
        },
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
    login() {
     this.$auth
.loginWith("local", {
data: {
email:this.email,
password:this.password
}
})
.then((response) => {
if (this.$auth.loggedIn) { 
console.log(user);
this.$router.push("/");
// alert("SUKSES BRO");
}
})
.catch((error) => alert(error));
    }
  }
        
    }
</script>