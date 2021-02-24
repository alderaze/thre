<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" class="mt-16" md="6" lg="4" v-for="i in 3" :key="i">
        <v-card
          class="mt-4 mx-auto oneup "
          max-width="400"
        >
          <v-sheet
            class="v-sheet--offset headline mx-auto"
            color="cyan"
            elevation="12"
            height="140"

            max-width="calc(100% - 32px)"
          >
            <v-sparkline
            height="100%"
              :labels="labels"
              label-size="15"
              :value="value"
              color="white"
              line-width="4"
              class="headline"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <div class="text-center pb-8 mt-n12">
                    <v-tooltip bottom v-for="i in icons" :key="i.icon">
                      <template class="text-center" v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="mx-4 faa-wrench animated-hover"
                          :color="i.color"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ i.icon }}
                        </v-icon>
                      </template>
                      <span>{{ i.titel }}</span>
                    </v-tooltip>
                  </div>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
        </v-col>
    </v-row>

    <v-row class="pt-10">
         <v-col cols="12" sm="12" class="mt-16" md="6" lg="4" v-for="i in 3" :key="i">
        <v-card
          class="mt-4 mx-auto oneup "
          max-width="400"
        >
          <v-sheet
            class="v-sheet--offset headline mx-auto"
            color="cyan"
            elevation="12"
            height="140"

            max-width="calc(100% - 32px)"
          >
            <v-sparkline
            height="100%"
              :labels="labels"
              label-size="15"
              :value="value"
              color="white"
              line-width="4"
              class="headline"
              padding="16"
            ></v-sparkline>
          </v-sheet>
          <div class="text-center pb-8 mt-n12">
                    <v-tooltip bottom v-for="i in icons" :key="i.icon">
                      <template class="text-center" v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="mx-4 faa-wrench animated-hover"
                          :color="i.color"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ i.icon }}
                        </v-icon>
                      </template>
                      <span>{{ i.titel }}</span>
                    </v-tooltip>
                  </div>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-10">
        <v-col cols="12" sm="12" class="mt-16" md="6" lg="4" v-for="i in 3" :key="i">
        <v-card
          class="mt-4 mx-auto oneup "
          max-width="400"
        >
        <v-sparkline
          height="200"
          class="v-sheet--offset"
          :fill="fill"
          :line-width="width"
          :padding="padding"
          :smooth="radius || false"
          :value="value"
          auto-draw
    ></v-sparkline>
          <div class="text-center pb-8 mt-n12">
                    <v-tooltip bottom v-for="i in icons" :key="i.icon">
                      <template class="text-center" v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="mx-4 faa-wrench animated-hover"
                          :color="i.color"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ i.icon }}
                        </v-icon>
                      </template>
                      <span>{{ i.titel }}</span>
                    </v-tooltip>
                  </div>

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
              User Registrations
            </div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon
              class="mr-2"
              small
            >
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: true,
      fill: true,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,

       labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
      icons: [
        { icon: "mdi-view-split-vertical", titel: "vue", color: "" },
        { icon: "mdi mdi-pencil ", titel: "edit", color: "green" },
        { icon: "mdi-close ", titel: "remove", color: "red" },
      ],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
  },
};
</script>


<style >
.up {
  transition: all 0.5s ease;
  position: absolute !important;
  left: calc(10% / 2);
  z-index: 3;
  bottom: 30%;
  max-height: 150px;
}
.main-card:hover .up {
  bottom: 84%;
}
.main-card2:hover .up2 {
  bottom: 64%;
}
.up2 {
  transition: all 0.5s ease;
  position: absolute !important;
  left: calc(10% / 2);
  z-index: 3;
  bottom: 50%;
  max-height: 195px;
}
.v-responsive__sizer {
  padding: 37% !important;
}
.v-sheet--offset {
    top: -24px;
    position: relative;
    transition:all .5s;
    z-index: 2;
  }
.oneup:hover  .v-sheet--offset{
    top: -55px;
  }
</style>