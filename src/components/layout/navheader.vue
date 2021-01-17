<template>
  <v-app-bar app flat color="transparent">
    <v-btn class="ml-3 mr-4" elevation="1" fab small @click="setmini">
      <v-icon>
        {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
      </v-icon>
    </v-btn>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="restdraw"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
    <h1>=== > {{ mini }}</h1>
  </v-app-bar>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: ["drawer"],
  data() {
    return {};
  },
  computed: {
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        console.log("asdsd");
      },
    },
  },
  methods: {
    ...mapMutations("naving", ["setmini", "retdrawer"]),
    restdraw() {
      let r = this.drawer;
      r = !r;
      this.$emit("changemini", r);
    },
  },
};
</script>

<style>
.bar {
  background: transparent !important;
}
</style>