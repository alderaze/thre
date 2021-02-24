<template>
  <div class="home">
    <navv />
    <router-view></router-view>
    <footerr class="foot" />
  </div>
</template>

<script>
// @ is an alias to /src
import navv from "../components/layout/nav";
import footerr from "../components/home/footerr";

export default {
  name: "Home",
  components: {
    navv,
    footerr,
  },
};
</script>
<style>
.container {
  max-width: 97%;
}
.foot {
  position: absolute;
  bottom: 0;
}
</style>
