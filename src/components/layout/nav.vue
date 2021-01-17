<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
    </v-navigation-drawer>
    <minnav :drawer="drawer" @changemini="drawer = $event" />
  </div>
</template>

<script>
import minnav from "./navheader";

import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      admins: [
        ["Management", "mss"],
        ["Settings", "sitt"],
      ],
      pages: [
        { name: "pricing", icon: "p" },
        { name: "rtl supported", icon: "rs" },
        { name: "timeLin", icon: "t" },
        { name: "longpage", icon: "log" },
        { name: "register page", icon: "rp" },
        { name: "user profile", icon: "up" },
        { name: "error page", icon: "ep" },
      ],
      mycomponents: [
        {
          name: "multelive",
          icon: "mlc",
          examp: [
            { name: "exampel", icon: "1em" },
            { name: "exampel", icon: "2em" },
          ],
        },
        [
          { name: "buttons", icon: "b" },
          { name: "grid system", icon: "gs" },
          { name: "navgation bar", icon: "nb" },
          { name: "icon", icon: "ii" },
        ],
      ],
      forms: [
        { name: "regular forms", icon: "rf" },
        { name: "extend form", icon: "ef" },
        { name: "valdiation form", icon: "vf" },
        { name: "wizard", icon: "wz" },
      ],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext", "groundnav"]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        console.log("dan");
      },
    },
  },
  methods: {
    ...mapMutations("naving", ["setdr"]),
  },

  components: {
    minnav,
  },
};
</script>





<style>
.hideico .v-list-item__icon {
  display: none !important;
}
.theme--light.v-icon {
  color: #fff;
}
.bar {
  background: transparent !important;
}
.ord .v-list-item__icon {
  order: 1;
}
</style>

