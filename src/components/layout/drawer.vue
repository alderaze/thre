<template>
  <div>
    <v-list-item class="">
      <v-list-item-icon>
        <v-icon id="titel">mdi mdi-vuetify </v-icon>
      </v-list-item-icon>
      <v-list-item-title class="text-h5 text-uppercase">
        <strong class="tt font-weight-black">vmd</strong>
        <span class="font-weight-light" :class="colortext"> pro</span>
      </v-list-item-title>
    </v-list-item>

    <v-divider class="mx-2 pa-0" color="#616161"></v-divider>
    <v-list-group
      class="color-icon"
      prepend-icon=" mdi mdi-vuetify "
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">johin lider</v-list-item-title>
      </template>
      <v-list-item v-for="([title, icon], i) in johin" :key="i" link>
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-divider class="mt-1 mx-2 pt-0" color="#616161 "></v-divider>

    <v-list-item
      class="px-2 mx-2 color-icon rounded mt-4"
      :class="maincolor"
      style=""
      router
      to="./"
    >
      <v-list-item-icon class="pa-0">
        <v-icon>mdi-view-dashboard </v-icon>
      </v-list-item-icon>

      <v-list-item-title color="red" class="pa-0 text-capitalize tt"
        >dashboard</v-list-item-title
      >
    </v-list-item>

    <v-list-group
      class="color-icon"
      prepend-icon=" mdi mdi-image"
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">pages</v-list-item-title>
      </template>
      <v-list-item
        v-for="([title, icon, router], i) in pages"
        :key="i"
        router
        :to="router.router"
      >
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-group
      class="color-icon"
      prepend-icon=" mdi-view-comfy "
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">components</v-list-item-title>
      </template>

      <v-list-group
        append-icon="fa-caret-down"
        class="color-icon"
        color="white"
      >
        <template v-slot:activator>
          <v-list-item-title class="tt text-uppercase">ml</v-list-item-title>
          <v-list-item-title class="tt">mlute live</v-list-item-title>
        </template>
        <v-list-item link>
          <v-list-item-title class="text-uppercase tt">cd</v-list-item-title>
          <v-list-item-title class="tt">child</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item
        v-for="([title, icon, router], i) in components"
        :key="i"
        router
        :to="router.router"
      >
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-group
      class="color-icon"
      prepend-icon=" mdi-clipboard-outline"
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">forms</v-list-item-title>
      </template>
      <v-list-item
        v-for="([title, icon, router], i) in forms"
        :key="i"
        router
        :to="router.router"
        link
      >
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-group
      class="color-icon"
      prepend-icon=" mdi mdi-grid"
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">tabs</v-list-item-title>
      </template>
      <v-list-item v-for="([title, icon], i) in tabs" :key="i" link>
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-group
      class="color-icon"
      prepend-icon=" mdi-map-marker"
      append-icon="fa-caret-down"
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-title class="tt">maps</v-list-item-title>
      </template>
      <v-list-item
        v-for="([title, icon, router], i) in maps"
        :key="i"
        router
        :to="router.router"
        link
      >
        <v-list-item-title class="text-uppercase tt">{{
          icon
        }}</v-list-item-title>
        <v-list-item-title class="tt">{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-item class="color-icon">
      <v-list-item-icon>
        <v-icon>mdi-widgets </v-icon>
      </v-list-item-icon>

      <v-list-item-title class="text-capitalize tt">widgets</v-list-item-title>
    </v-list-item>

    <v-list-item class="color-icon">
      <v-list-item-icon>
        <v-icon>mdi-chart-timeline-variant </v-icon>
      </v-list-item-icon>

      <v-list-item-title class="text-capitalize tt">chart</v-list-item-title>
    </v-list-item>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["colortext", "maincolor"]),

    ...mapGetters("drawer", [
      "items",
      "johin",
      "pages",
      "components",
      "forms",
      "tabs",
      "maps",
    ]),
  },
  methods: {
    ...mapMutations("naving", ["setmini"]),
  },
};
</script>
<style>
.tt {
  color: white !important;
}

.fa-caret-down {
  font-size: 17px !important;
}

.color-icon .v-icon.v-icon {
  color: #fff !important;
}
#titel {
  color: #7ac6ff !important;
  font-size: 34px !important;
}
</style>

