<template>
  <div class="pb-16 mb-16">
    <v-card flat color="transparent" class="text-center pb-16">
      <v-card-title class="d-block font-weight-light">Widgets</v-card-title>
      <v-card-text
        class="d-block font-weight-light mx-auto body-1"
        style="max-width: 400px"
      >
        Below is a collection of component examples for Vuetify Material
        Dashboard
      </v-card-text>
    </v-card>
    <v-container fluid class="pt-16">
      <one />
      <tow />
    </v-container>
  </div>
</template>

<script>
import one from "../rtl/one";
import tow from "../rtl/tow";
export default {
  components: { one, tow },
};
</script>