<template>
  <div @click="myvalue = !myvalue">
    <v-card color="transparent" flat>
      <v-row>
        <v-col md="6" sm="12" cols="12">
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="6"
              class="text-center"
              v-for="i in info"
              :key="i.id"
            >
              <v-card
                color="transparent"
                flat
                class="py-8 hovcard"
                :class="{ active: active }"
                v-animate-css.hover="'pulse'"
                @mouseover="active = true"
                @mouseleave="active = false"
              >
                <v-card-title
                  class="d-block text-center body-2 font-weight-light"
                >
                  {{ i.titel }}
                </v-card-title>
                <v-btn outlined x-large class="pa-16 ma-7" fab>
                  <v-icon size="50">{{ i.icon }}</v-icon>
                </v-btn>

                <v-card-title class="display-1 d-block font-weight-light">
                  {{ i.price }}
                </v-card-title>
                <v-card-text class="font-weight-light lighten-5">
                  {{ i.text }}
                </v-card-text>
                <v-btn class="rounded-pill ground pa-5 font-weight-light">
                  Choose Plan
                </v-btn>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="text-center pa-7">
                <v-icon size="30">mdi-format-quote-close </v-icon>
                <v-card-text class="title">
                  بعد و وسوء الأحمر, دون عقبت الهادي أم, قد حول قادة حكومة
                  يتعلّق. أخذ حصدت اوروبا أن, كلا مهمّات اسبوعين التخطيط عل.
                  وإيطالي الأوروبي و نفس. صفحة احداث أضف ان, هو مرجع نهاية
                  لهيمنة كما. تم مايو لفشل المدن دول, جعل أن عسكرياً التّحول
                  استرجاع.
                </v-card-text>
                <v-card
                  max-width="100px"
                  max-height="100px"
                  elevation="10"
                  class="ma-auto mb-n16 rounded-circle py-5"
                >
                  <v-img
                    max-width="100%"
                    max-height="100%"
                    class="ma-auto"
                    src="https://vuetify-material-dashboard.vuetifyjs.com/img/vmd.a39402e6.svg"
                  ></v-img>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" sm="12" cols="12">
          <v-timeline dense align-top>
            <v-timeline-item
              v-for="item in items"
              :key="item.id"
              :color="item.color"
              large
              :icon="item.icon"
              size="100"
              fill-dot
            >
              <v-card class="pa-8 pt-16">
                <div class="ab rounded-circle" :class="item.color"></div>
                <v-card-text>
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              color="purple"
              large
              icon="mdi-star"
              size="100"
              fill-dot
            >
              <v-card class="pa-8 pt-16">
                <div class="ab rounded-circle purple"></div>
                <v-card-text>
                  <p>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </p>
                </v-card-text>
                <div>
                  <v-menu
                    nudge-bottom="10"
                    transition="scale-transition"
                    origin="top right"
                    append-icon="fa-caret-down"
                  >
                    <template
                      append-icon="fa-caret-down"
                      v-slot:activator="{ on, attrs }"
                    >
                      <v-btn
                        dark
                        color="purple"
                        class="rounded-xl pa-5"
                        v-bind="attrs"
                        v-on="on"
                        :aria-expanded="true"
                        @click="myvalue = !myvalue"
                      >
                        <v-icon size="15">{{ myvalue ? icon2 : icon }}</v-icon>
                      </v-btn>
                    </template>
                    <v-list
                      nudge-bottom="10"
                      transition="scale-transition"
                      origin="top right"
                    >
                      <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title
                          v-text="'Item ' + n"
                        ></v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "teow",
  data() {
    return {
      myvalue: false,
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
      ],

      icon: "fa-caret-down",
      icon2: "fa-caret-up",
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
      ],
    };
  },
};
</script>
<style >
.ab {
  position: absolute;
  right: 19px;
  top: 27px;
  width: 30px;
  height: 30px;
  border-radius: -6px;
  display: block;
}
</style>