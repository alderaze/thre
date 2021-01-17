<template>
  <v-app style="height: 3000px">
    <navbar />
    <navv />
    <sittings />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>



<script>
import navv from "./components/layout/nav";
import navbar from "./components/layout/navheader";
import sittings from "./components/layout/sittings";

export default {
  data() {
    return {};
  },
  components: {
    navv,
    sittings,
    navbar,
  },
};
</script>

<style>
*:not(i) {
  font-family: Roboto, sans-serif !important;
}
</style>
