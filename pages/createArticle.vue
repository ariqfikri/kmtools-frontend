<template>
  <v-app>
    <v-list-item-action-text class="font-weight-bold display-1"
      >Create Article</v-list-item-action-text
    >
    <v-container>
      <v-row>
        <v-col>
          <v-list-item-action-text class="font-weight-bold subtitle-1"
            >Title Article</v-list-item-action-text
          >
          <v-text-field v-model="title" outlined dense></v-text-field>
        </v-col>
      </v-row>
      <v-radio-group v-model="radios">
        <v-list-item-action-text class="font-weight-bold subtitle-1"
          >Category</v-list-item-action-text
        >
        <br />
        <v-row>
          <v-col v-for="i in category" :key="i.id">
            <v-radio
              :label="i.name"
              :value="i.id"
              color="info"
              class="red--text radio-item"
              background-color="Black"
            ></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-row>
        <v-col>
          <div id="top">
            <!-- Text Editor -->
            <TuiEditor
              v-model="content"
              mode="wysiwyg"
              preview-style="vertical"
              height="300px"
            />

            <!-- Markdown Viewer -->
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="end">
          <v-btn>Cancel</v-btn>
          <v-btn class="primary" @click="create">Create</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<style scoped>
.radio-item label {
  color: rgb(0, 0, 0);
  font-weight: normal;
}
</style>
<script>
/* eslint-disable */
import Swal from 'sweetalert2'
export default {
 

  data() {
    return {
      radios: '',
      title: '',
      content: null,
      category: []
    }
  },
  
 
  beforeMount() {
    this.$axios
        .get('/category')
        .then((response) => {
          console.log(response.data.data)
          this.category = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        }),
          $(document).ready(function() {
  $('#summernote').summernote({height: 300});
})
       
  },
  methods: {
    create() {
      this.$axios
        .post('/article/publish', {
          id_interest_category: this.radios,
          title: this.title,
          content: this.content
        })
        .then(function(response) {
          Swal.fire({
        title: 'Success',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
   
  },
   
}
</script>
