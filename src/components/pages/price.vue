<template>
  <div>
    <div class="over"></div>

    <v-img
      class="img"
      src="https://vuetify-material-dashboard.vuetifyjs.com/img/pricing.f76b550f.jpg"
    ></v-img>
    <v-container fluid class="px-md-16 ind">
      <v-card color="transparent" flat class="text-center">
        <v-row>
          <v-col>
            <h1 class="white--text font-weight-light">
              Pick the best plan for you
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4" sm="8" cols="10" class="ma-auto">
            <p class="white--text font-weight-light pt-14">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </p>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col
          md="3"
          sm="6"
          cols="12"
          class="text-center"
          v-for="i in info"
          :key="i.id"
        >
          <v-card
            color="transparent"
            class="py-8 hovcard"
            :class="{ active: active }"
            v-animate-css.hover="'pulse'"
            @mouseover="active = true"
            @mouseleave="active = false"
          >
            <v-card-title
              class="color d-block text-center body-2 font-weight-light"
            >
              {{ i.titel }}
            </v-card-title>
            <v-btn outlined x-large class="pa-16 ma-7" fab dark color="grey">
              <v-icon size="50" class="white--text">{{ i.icon }}</v-icon>
            </v-btn>

            <v-card-title
              class="white--text display-1 d-block font-weight-light"
            >
              {{ i.price }}
            </v-card-title>
            <v-card-text class="color font-weight-light lighten-5">
              {{ i.text }}
            </v-card-text>
            <v-btn class="rounded-pill ground pa-5 font-weight-light">
              Choose Plan
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "price",
  data() {
    return {
      active: false,
      info: [
        {
          titel: "FREELANCER",
          icon: "mdi-sofa ",
          price: "FREE",
          text:
            "This is good if your company size is between 2 and 10 Persons.",
        },
        {
          titel: "SMALL COMPANY",
          icon: " mdi-home",
          price: "$29",
          text:
            "This is good if your company size is between 2 and 10 Persons.",
        },
        {
          titel: "MEDIUM COMPANY",
          icon: "mdi-domain ",
          price: "69$",
          text:
            "This is good if your company size is between 11 and 99 Persons.",
        },
        {
          titel: "mdi-bank",
          icon: "mdi-bank",
          price: "159$",
          text: "This is good if your company size is 99+ or greater Persons.",
        },
      ],
    };
  },
};
</script>
<style>
.color {
  color: #eee !important;
}
.active:hover {
  background-color: #fff !important;
  transition: all 0.3s;
}
.active:hover .v-card__title,
.v-card__text {
  color: #a2a2a2 !important;
}
.active:hover .ground {
  background: #e91e63 !important;
}
.active:hover .ground .v-btn__content {
  color: #fff !important;
}
.active:hover .v-icon {
  color: #e91e63 !important;
}
.img {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
.ind {
  z-index: 100;
}
.over {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}
</style>