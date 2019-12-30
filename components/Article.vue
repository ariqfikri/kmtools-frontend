<template>
  <v-app>
    <v-layout>
      <v-flex>
        <v-container fluid>
          <v-row
            ><v-col
              ><p class="display-1">
                {{ title }}
              </p></v-col
            ></v-row
          >

          <v-row
            ><v-col
              ><p>
                {{ publish }}
              </p></v-col
            ></v-row
          >
          <v-row>
            <v-col>
              <v-img
                src="/javascript.jpg"
                max-height="500"
                max-width="700"
              ></v-img> </v-col
          ></v-row>
          <v-row
            ><v-col><TuiEditorViewer :value="article"/></v-col
          ></v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    article: {
      type: String,
      default: null
    },
    publish: {
      type: String,
      default: null
    }
  }
}
</script>
