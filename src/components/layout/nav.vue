<template>
  <div class="px-5">
    <v-navigation-drawer
      id="default-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      style="background: #363636"
      :src="groundnav"
      width="260"
      height="100vh"
      mini-variant-width="85"
      enable-resize-watcher
      app
      :right="$vuetify.rtl"
    >
      <v-overlay
        z-index="-1"
        style="background: rgba(0, 0, 0, 0.5)"
      ></v-overlay>
      <drawer class="px-2" />
      <template #append>
        <div class="pa-4 text-center d-block">
          <v-btn
            class="text-none mb-4"
            color="white"
            href="https://vuetifyjs.com"
            small
            text
          >
            Documentation
          </v-btn>

          <v-btn
            block
            class="text-none"
            :color="maincolor"
            href="https://store.vuetifyjs.com/products/vuetify-material-dashboard-pro"
          >
            buy new
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <minnav :drawer="drawer" @changemini="drawer = $event" />
  </div>
</template>

<script>
import minnav from "./navheader";
import drawer from "./drawer";

import { mapGetters, mapMutations } from "vuex";
export default {
  // props: ["drawerr"],

  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext", "groundnav"]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        return this.$store.commit("naving/setmini");
      },
    },

    restdraw() {
      let r = this.drawerr;
      return r;
    },
  },
  methods: {
    ...mapMutations("naving", ["setdr", "setmini"]),
  },

  components: {
    minnav,
    drawer,
  },
};
</script>





<style lang='sass'>
.nav
  overflow-y: auto !important
  overflow-x: hidden !important

#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>

