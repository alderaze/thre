<template>
  <v-card class="text-center menue">
    <v-menu
      transition="scale-transition"
      left
      nudge-top="150"
      nudge-left="10"
      max-width="301px"
      origin="right top"
      :offset-x="offset"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="grey lighten-1 display-1" v-bind="attrs" v-on="on" dark>
          <v-icon class="fas fa-cog faa-spin animated"> </v-icon>
        </v-btn>
      </template>

      <v-card width="400px" class="pa-5">
        <v-row>
          <v-col>
            <v-switch
              v-model="$vuetify.theme.dark"
              flat
              class="pa-0 ma-0"
            ></v-switch>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
          <v-col> theme </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              on:click.stop="setmini"
              v-model="mini"
              flat
              class="pa-0 ma-0"
            ></v-switch>
          </v-col>
          <v-col>
            <v-spacer></v-spacer>
          </v-col>
          <v-col> slidmini </v-col>
        </v-row>
        <v-divider class="pa-5"></v-divider>
        <p width="100%">theme background</p>
        <v-row class="d-flex justify-center text-center">
          <v-col>
            <v-avatar @click="color1" color="primary" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color2" color="secondary" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color3" color="accent" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color4" color="error" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color5" color="warning" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color6" color="info" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="color7" color="success" size="40"></v-avatar>
          </v-col>
        </v-row>
        <p class="pa-3"></p>
        <v-divider class="pa-3"></v-divider>

        <p width="100%">theme colortext</p>
        <v-row class="d-flex justify-center text-center">
          <v-col>
            <v-avatar @click="colortext1" color="primary" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar
              @click="colortext2"
              color="secondary"
              size="40"
            ></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="colortext3" color="accent" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="colortext4" color="error" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="colortext5" color="warning" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="colortext6" color="info" size="40"></v-avatar>
          </v-col>
          <v-col>
            <v-avatar @click="colortext7" color="success" size="40"></v-avatar>
          </v-col>
        </v-row>
        <p class="pa-3"></p>
        <v-divider class="pa-3"></v-divider>
        <v-row>
          <v-col @click="setgroundnav1" cols="12" md="4">
            <v-item>
              <v-img :src="ground1" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
          <v-col @click="setgroundnav2" cols="12" md="4">
            <v-item>
              <v-img :src="ground2" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
          <v-col @click="setgroundnav3" cols="12" md="4">
            <v-item>
              <v-img :src="ground3" height="150" class="text-right pa-2">
              </v-img>
            </v-item>
          </v-col>
        </v-row>
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
    ...mapGetters(["box", "ground1", "ground3", "ground2"]),
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
  top: 200px;
  box-shadow: none !important;
  position: fixed !important;
  background: transparent;
  z-index: 1000;
}
</style>
