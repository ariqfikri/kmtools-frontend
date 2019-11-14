<template>
  <v-app id="inspire">
    <form-login
      :title="title"
      :form="form"
      :width="width"
      :namebutton="namebutton"
      :method="signup"
    ></form-login>
  </v-app>
</template>
<script>
export default {
  layout: 'empty',
  data() {
    return {
      loc: '/login',
      title: 'Create your account',
      width: '9.4cm',
      namebutton: 'Agree and Sign up',
      form: [
        {
          label: 'Email',
          name: 'email',
          model: 'email'
        },
        {
          label: 'Password',
          name: 'password',
          model: 'password'
        },
        {
          label: 'Name',
          name: 'name',
          model: 'name'
        },
        {
          label: 'Username',
          name: 'username',
          model: 'username'
        }
      ]
    }
  },
  methods: {
    signup() {
      this.$axios
        .post('/register', {
          email: 'ariqfikri@gmail.com',
          password: 'fikri',
          name: 'fikriariq',
          username: 'fktestes'
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
