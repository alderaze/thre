<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <sittings />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
import sittings from "./components/layout/sittings";

export default {
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  components: { sittings },
};
</script>

<style>
*:not(i) {
  font-family: Roboto, sans-serif !important;
}
body {
}
</style>

