<template>
  <div>
    <v-card color="transparent" flat class="py-2 px-4">
      <v-toolbar dense color="transparent" flat>
        <v-toolbar-title class="body-2 ml-4" v-for="i in items" :key="i">{{
          i
        }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title class="body-2 ml-4 pr-12"
          >© 2021, Made by</v-toolbar-title
        >
        <v-btn icon class="pr-12">
          <v-icon>mdi-vuetify</v-icon>
          <span>Vuetify</span>
        </v-btn>
      </v-toolbar>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["VUETIFY DOCS", "ABOUT US", "BLOG", "LICENSES"],
    };
  },
};
</script>