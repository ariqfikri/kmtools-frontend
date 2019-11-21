<template>
  <v-app>
    <v-list-item-action-text class="font-weight-bold display-1"
      >Create Report Error</v-list-item-action-text
    >
    <v-container>
      <v-row>
        <v-col cols="1">
          <v-list-item-action-text class="font-weight-bold subtitle-1"
            >Title</v-list-item-action-text
          >
        </v-col>
        <v-col>
          <v-text-field
            v-model="title"
            outlined
            dense
            label="Title"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-radio-group v-model="radioCategory">
        <v-row>
          <v-col>
            <v-list-item-action-text class="font-weight-bold subtitle-1"
              >Category</v-list-item-action-text
            >
          </v-col>
          <v-col v-for="i in category" :key="i.id">
            <v-radio :label="i.name" :value="i.id" color="indigo"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-row>
        <v-col cols="1">
          <v-list-item-action-text class="font-weight-bold subtitle-1"
            >Description</v-list-item-action-text
          >
        </v-col>
        <v-col>
          <v-textarea
            v-model="content"
            outlined
            name="input-7-4"
            label="Description"
          ></v-textarea>
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
<script>
/* eslint-disable */
export default {
  data() {
    return {
      
      radioCategory: '',
      title: '',
      content: '',
      category: [],
   
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
        })
  },
  methods: {
    create() {
      this.$axios
        .post('/', {
          id_interest_category: this.radioCategory,
          title: this.title,
          content: this.content
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  }
}
</script>
