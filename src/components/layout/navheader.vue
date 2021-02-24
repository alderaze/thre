<template>
  <v-app-bar app flat color="transparent">
    <v-btn
      class="ml-3 mr-4 hidden-sm-and-down"
      elevation="1"
      fab
      small
      depressed
      @click="setmini"
    >
      <v-icon>
        {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
      </v-icon>
    </v-btn>

    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="restdraw"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field
      placeholder="Search"
      style="max-width: 230px"
      :color="maincolor"
      single-line
      class="mr-16 pr-8 hidden-sm-and-down"
      hide-details
      :class="$vuetify.rtl ? 'pl-8' : 'pl-0'"
    >
      <template v-if="$vuetify.breakpoint.mdAndUp" v-slot:append-outer>
        <v-btn
          class="mt-n2 ml-n2"
          fab
          small
          elevation="2"
          height="44"
          width="44"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <v-btn depressed color="grey" class="pa-0 home lighten-1">
      <v-icon>mdi-view-dashboard </v-icon>
    </v-btn>

    <v-menu
      transition="scale-transition"
      left
      nudge-top="-37"
      nudge-left="0"
      max-width="300px"
      origin="right top"
      class="pa-0"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          v-bind="attrs"
          v-on="on"
          color="transparent"
          class="pa-0 home lighten-1 mx-1"
          style="max-width: 30px !important"
        >
          <v-badge
            bordered
            :content="messages"
            :value="messages"
            :color="maincolor"
            overlap
          >
            <v-icon> mdi-bell </v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list nav width="320px" class="pa-2" lin>
        <v-list-item-group class="pr-4" :color="maincolor" v-model="model">
          <v-list-item elevation="2" v-for="n in infos" :key="n">
            <v-list-item-content class="yy">
              <v-list-item-title
                class="body-2 pa-0 bt"
                v-text="'Item ' + n"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-menu
      transition="scale-transition"
      left
      nudge-top="-37"
      nudge-left="0"
      max-width="300px"
      origin="right top"
      elevation="18"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          v-bind="attrs"
          v-on="on"
          color="transparent"
          class="pa-0 home lighten-1 mx-1"
          style="max-width: 30px !important"
        >
          <v-icon> mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list nav width="200px" class="pa-2" lin>
        <v-list-item-group :color="maincolor" v-model="model">
          <v-list-item v-for="n in user" :key="n">
            <v-list-item-content class="yy">
              <v-list-item-title
                class="body-2 pa-0 bt"
                v-text="'Item ' + n"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-1 mx-2 pt-0" color="#616161 "></v-divider>
          <v-list-item class="mt-3">
            <v-list-item-content class="yy">
              <v-list-item-title class="body-2 pa-0">
                log out
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: ["drawer"],
  data() {
    return {
      messages: 4,
      show: false,
      model: 1,
      infos: [
        "Mike John Responded to your email",
        "You have 5 new tasks",
        "You're now friends with Andrew",
        "Another Notification",
        "Another one",
      ],
      user: ["portfile", "sitting"],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
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
      console.log(this.drawer);
    },
  },
};
</script>

<style>
.bar {
  background: transparent !important;
}
</style>

<style scoped>
.home.v-btn:not(.v-btn--round).v-size--default {
  min-width: 60px !important;
}
.v-list-item :hover .v-list-item--link:before {
  background-color: red !important;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
</style>