<template>
  <v-app>
    <v-card depressed flat color="transparent indexnav">
      <v-toolbar flat color="transparent" height="70px" z-index="100">
        <v-toolbar-title class="font-weight-light text-capitalize white--text"
          >price page</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-list dense color="transparent">
          <v-list-item-group class="d-flex">
            <v-list-item
              class="mr-md-7 py-1 rounded-lg"
              :class="{
                'pa-1': $vuetify.breakpoint.smAndDown,
              }"
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.router"
            >
              <v-list-item-icon class="mr-0 rounded-lg">
                <v-icon class="pr-2" color=" white" v-text="item.ico"></v-icon>
              </v-list-item-icon>
              <v-list-item-content class="rounded-lg">
                <v-list-item-title
                  class="font-weight-light rounded-lg white--text hidden-sm-and-down"
                  v-text="item.name"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-toolbar>
    </v-card>

    <router-view class="index"></router-view>

    <footerr class="foot" />
  </v-app>
</template>
<script>
import footerr from "../pages/footerr";
export default {
  name: "price",
  data() {
    return {
      items: [
        { name: "Dashboard", ico: " mdi-view-dashboard", router: "/" },
        {
          name: "priceing",
          ico: " mdi-currency-usd ",
          router: "/mainpages/price",
        },
        {
          name: "Register",
          ico: " mdi-account-multiple-plus ",
          router: "/mainpages/regist",
        },
        { name: "login", ico: " mdi-fingerprint", router: "/mainpages/long" },
      ],
    };
  },
  components: { footerr },
};
</script>
<style>
.index {
  z-index: 9;
}

.v-toolbar {
  z-index: 10;
}
.v-list-item:hover {
  background: rgba(255, 255, 255, 0.5) !important;
}
.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.foot > * {
  color: #fff !important;
}
.indexnav {
  z-index: 100;
}
</style>