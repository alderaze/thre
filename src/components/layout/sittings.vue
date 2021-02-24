<template>
  <v-card
    class="text-center"
    :class="{ menue: !$vuetify.rtl, menue2: $vuetify.rtl }"
  >
    <v-menu
      :right="$vuetify.rtl"
      :left="!$vuetify.rtl"
      transition="scale-transition"
      nudge-top="0"
      :nudge-left="$vuetify.rtl ? -10 : 10"
      max-width="300px"
      :origin="$vuetify.rtl ? 'left top' : 'right top'"
      :offset-x="offset"
      :close-on-content-click="false"
    >
      <template
        style="background-color: rgba(0, 0, 0, 0.3)"
        v-slot:activator="{ on, attrs }"
      >
        <v-btn
          style="background-color: rgba(0, 0, 0, 0.3)"
          class="display-1"
          v-bind="attrs"
          v-on="on"
          dark
        >
          <v-icon class="fas fa-cog faa-spin animated"> </v-icon>
        </v-btn>
      </template>

      <v-card width="300px" class="pa-5">
        <strong
          class="pb-2 text-center ma-auto d-block grey--text font-weight-regular text-uppercase subtitle-2"
          >theme background</strong
        >
        <v-row class="d-flex justify-center text-center py-3 px-2">
          <v-col class="pa-0">
            <v-avatar
              @click="color1"
              color="primary"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="color2"
              color="secondary"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="color3"
              color="accent"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="color4"
              color="error"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="color5"
              color="warning"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="color6"
              color="purple"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
        </v-row>
        <p class="pa-1"></p>
        <v-divider class="ma-1" color="error"></v-divider>

        <strong
          width="100%"
          class="text-center ma-auto d-block grey--text font-weight-regular text-uppercase subtitle-2"
          >theme colortext</strong
        >
        <v-row class="d-flex justify-center text-center px-3 py-3">
          <v-col class="pa-0">
            <v-avatar @click="colortext1" color="primary" size="25"></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="colortext2"
              color="secondary"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="colortext3"
              color="accent"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="colortext4"
              color="error"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="colortext5"
              color="warning"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
          <v-col class="pa-0">
            <v-avatar
              @click="colortext6"
              color="purple"
              class="pa-0"
              size="25"
            ></v-avatar>
          </v-col>
        </v-row>
        <v-divider class="my-6" color="error"></v-divider>

        <v-row>
          <v-col class="pa-0">
            <v-switch
              v-model="$vuetify.theme.dark"
              flat
              class="pa-0 ma-0 pt-3"
            ></v-switch>
          </v-col>
          <v-col class="pa-0">
            <v-spacer></v-spacer>
          </v-col>
          <v-col> theme </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 pt-3">
            <v-switch
              on:click.stop="setmini"
              v-model="mini"
              flat
              class="pa-0 ma-0"
            ></v-switch>
          </v-col>
          <v-col class="pa-0">
            <v-spacer></v-spacer>
          </v-col>
          <v-col> slidmini </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-0 pt-3">
            <v-switch
              @click="$vuetify.rtl = !$vuetify.rtl"
              flat
              class="pa-0 ma-0"
            ></v-switch>
          </v-col>
          <v-col class="pa-0">
            <v-spacer></v-spacer>
          </v-col>
          <v-col> rtl page </v-col>
        </v-row>

        <p class="pa-3"></p>
        <v-divider class="pa-3"></v-divider>
        <v-row>
          <v-col @click="setgroundnav1" cols="4" md="4">
            <v-item>
              <v-img :src="ground1" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
          <v-col @click="setgroundnav2" cols="4" md="4">
            <v-item>
              <v-img :src="ground2" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
          <v-col @click="setgroundnav3" cols="4" md="4">
            <v-item>
              <v-img :src="ground3" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
        </v-row>

        <div class="py-4 text-center d-block">
          <v-btn
            class="mb-4"
            :color="maincolor"
            :class="colortext"
            href="https://vuetifyjs.com"
            block
          >
            Documentation
          </v-btn>

          <v-btn
            block
            :class="colortext"
            class="text-none"
            :color="maincolor"
            href="https://store.vuetifyjs.com/products/vuetify-material-dashboard-pro"
          >
            Upgrade to Pro
          </v-btn>
          <v-btn
            block
            class="mt-4"
            :color="maincolor"
            :class="colortext"
            href="https://store.vuetifyjs.com/products/vuetify-material-dashboard-pro"
          >
            get freedome
          </v-btn>
        </div>

        <div class="pa-5 text-center d-block">
          <strong
            width="100%"
            class="text-center d-block grey--text font-weight-regular pb-4 text-uppercase subtitle-2"
            >thank you for sharing</strong
          >
          <v-btn class="mr-2 rounded-pill lighten-2 py-5" dark color="blue ">
            <v-icon dark> mdi mdi-twitter </v-icon>
            <span>+50</span>
          </v-btn>
          <v-btn class="ml-2 rounded-pill py-5" dark color="primary">
            <v-icon dark> mdi mdi-facebook </v-icon>
            <span>+50</span>
          </v-btn>
        </div>
      </v-card>
    </v-menu>
  </v-card>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    fav: true,
    menu: false,
    message: false,
    hints: true,
    offset: true,
    swtch: "",
    ff: '@click="key2"',
    vv: "",
  }),
  computed: {
    ...mapGetters([
      "box",
      "ground1",
      "ground3",
      "ground2",
      "maincolor",
      "colortext",
    ]),
    mini: {
      get() {
        return this.$store.getters["naving/minii"];
      },
      set() {
        this.$store.commit("naving/setmini");
      },
    },
  },
  methods: {
    ...mapMutations([
      "color1",
      "color2",
      "color3",
      "color4",
      "color5",
      "color6",
      "color7",
      "colortext1",
      "colortext2",
      "colortext3",
      "colortext4",
      "colortext5",
      "colortext6",
      "colortext7",
      "groundnav1",
      "setgroundnav1",
      "setgroundnav2",
      "setgroundnav3",
    ]),
    ...mapMutations("naving", ["retmini"]),
  },
  components: {},
};
</script>

<style>
.menue {
  width: 56px;
  right: 0px;
  top: 110px;
  box-shadow: none !important;
  position: fixed !important;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.menue2 {
  width: 56px;
  left: 0px;
  top: 110px;
  box-shadow: none !important;
  position: fixed !important;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
