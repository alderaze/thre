<template>
  <v-container fulid class="pb-16">
    <div class="text-center pt-10 pb-12">
      <h1 class="headline">Timelines</h1>
      <p class="body-1 pt-5">
        Please checkout the
        <a
          class="text-decoration-none"
          href="https://vuetifyjs.com/en/components/timelines/"
          target="-blank"
          >full documentation</a
        >
      </p>
    </div>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title"> Lorem Ipsum Dolor </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
            <v-btn :color="item.color" class="mx-0" outlined> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>


<script>
export default {
  name: "tiemlie",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
      },
    ],
  }),
};
</script>