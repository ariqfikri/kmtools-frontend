<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="primary">
      <v-btn text to="/" color="primary">
        <v-img
          src="/wissen-logo.png"
          max-width="110"
          style="margin-top:10px"
        ></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon class="white--text ma-2" @click="create"
        ><v-icon>mdi-file-edit-outline</v-icon>
        <p class="ma-2">Write</p></v-btn
      >

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn style="margin-bottom:10px" text v-on="on">
            <v-avatar color="blue">
              <v-icon>mdi-account-outline</v-icon>
            </v-avatar>
            <v-toolbar-title class="white--text ma-2" v-text="user.name" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="activity">
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
          <v-list-item @click="profil">
            <v-list-item-title>Setting</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      clipped: null,
      drawer: null,
      fixed: null,
      user: [],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Memo'
    }
  },
  beforeMount() {
    this.$axios
      .get('/api/auth/user')
      .then((response) => {
        console.log(response.data.user)
        this.user = response.data.user
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods:{
    logout(){
      this.$axios
        .post('/logout', {
        })
        .then((response) =>{
          console.log(response)
          this.$auth.logout('/login')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    profil(){
      this.$router.push("/profil")
    },
     activity(){
      this.$router.push("/activity")
    },
     create(){
      this.$router.push("/createArticle")
    }
  }
}
</script>
