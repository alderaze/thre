<template>
  <div>
    <h1>buttons page</h1>
    <h1>buttons page</h1>
    <h1>{{bt}}</h1>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters(["bt"])
  }
};
</script>