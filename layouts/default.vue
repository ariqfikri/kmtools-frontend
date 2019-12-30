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
      <v-autocomplete
        background-color="white"
        rounded
        outlined
        clearable
        dense
        append-icon="mdi-magnify"
        style="margin-top:30px;width:30px"
      ></v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn icon class="white--text ma-2" @click="create"
        ><v-icon>mdi-file-edit-outline</v-icon></v-btn
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
            <v-list-item-title>profil</v-list-item-title>
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
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-timelapse',
          title: 'Inspire'
        },
        {
          icon: 'mdi-bell',
          title: 'Inspire'
        },
        {
          icon: 'mdi-credit-card-plus',
          title: 'Inspire',
          to: '/templateCreate'
        }
      ],
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
          this.$router.push('/login')
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
