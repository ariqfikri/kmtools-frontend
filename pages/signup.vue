<template>
  <v-app id="inspire">
    <form-signup
      :title="title"
      :width="width"
      :namebutton="namebutton"
    ></form-signup>
  </v-app>
</template>
<script>
export default {
  layout: 'empty',
  data() {
    return {
      title: 'Create your account',
      width: '9.4cm',
      namebutton: 'Agree and Sign up'
    }
  }
}
</script>
