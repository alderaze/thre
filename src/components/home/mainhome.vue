<template>
  <div>
    <blobalLock />
    <cards />
    <footerr />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import blobalLock from "./globalLock";
import cards from "./cards";
import footerr from "./footerr";
export default {
  name: "mainhomepage",
  components: {
    blobalLock,
    cards,
    footerr,
  },
  methods: {
    ...mapMutations("naving", ["retmini"]),
  },
};
</script>