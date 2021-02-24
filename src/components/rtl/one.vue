<template>
  <div>
    <v-row>
      <v-col md="6" sm="12" cols="12" class="mb-sm-16">
        <v-card>
          <v-card class="">
            <v-card class="up mx-4 mt-n16 pa-5" :color="maincolor">
              <v-card-title class="font-wight-bold title white--text">
                لتكاليف يبق
              </v-card-title>
              <v-card-text class="white--text pa-0">
                بالإنزال وفي. خيار ومضى العمليات تم ذلك, تم معقل مرمى
              </v-card-text>
            </v-card>
            <v-card class="pt-16">
              <v-data-table
                dense
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1 pt-16"
              ></v-data-table>
            </v-card>
          </v-card>
        </v-card>
      </v-col>

      <v-col
        md="6"
        sm="12"
        cols="12"
        class=""
        :class="{
          'mt-16': $vuetify.breakpoint.smAndDown,
          'pt-8': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-card class="pt-16">
          <v-card class="mx-4 up2">
            <v-toolbar :color="maincolor" class="px-12" dark flat height="70px">
              <template v-slot:extension>
                <v-tabs class="mb-14 titel" v-model="tab" align-with-title>
                  <v-tab class="body-2" v-for="item in items" :key="item.id">
                    {{ item.text }}
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-tab>
                  <span class="pt-4 body-2">: ابداء </span>
                </v-tabs>
              </template>
            </v-toolbar>
          </v-card>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.id">
              <v-card flat class="px-7 pt-16">
                <v-row v-for="item2 in item.one" :key="item2.id">
                  <v-col class="col-1">
                    <v-checkbox :color="maincolor"></v-checkbox>
                  </v-col>
                  <v-col col="8">
                    <p class="body-2 pt-4">{{ item2 }}</p>
                  </v-col>
                  <v-col class="col-auto">
                    <v-icon :class="$vuetify ? 'pr-2' : 'pl-2'">
                      mdi-pencil
                    </v-icon>
                    <v-icon color="red"> mdi-close </v-icon>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <div class="text-center">
            <v-menu transition="scale-transition" origin="center center">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark color="primary" v-bind="attrs" v-on="on">
                  Scale Transition
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                  <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

      
<script>
import { mapGetters } from "vuex";
export default {
  name: "rtl",
  data() {
    return {
      tab: null,
      fix: [
        "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
        "خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بوسي؟",
        "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
        "قم بإنشاء 4 تجارب مستخدم غير مرئية لم تعرف عنها أبدًا",
      ],
      items: [
        {
          icon: " mdi-bug",
          text: "اصلاح",
          one: [
            "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
            "خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بوسي؟",
            "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
            "قم بإنشاء 4 تجارب مستخدم غير مرئية لم تعرف عنها أبدًا",
          ],
        },
        {
          icon: " mdi-code-tags ",
          text: "كود",
          one: [
            "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي",
            "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
          ],
        },
        {
          icon: " mdi-cloud",
          text: "سحاب",
          one: [
            "خطوط من الأدب الروسي العظيم؟ أو رسائل البريد الإلكتروني من بوسي؟",
            "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
            "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي",
          ],
        },
      ],

      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
    };
  },
  computed: {
    ...mapGetters(["maincolor", "colortext"]),
  },
};
</script>
<style >
.fa-chevron-left,
.fa-chevron-right {
  font-size: 15px !important;
}
.up2 {
  transition: all 0.5s ease;
  position: absolute !important;
  left: calc(3% / 2);
  z-index: 3;
  bottom: 77%;
  width: 90%;
  max-height: 195px;
}
.up {
  transition: all 0.5s ease;
  position: absolute !important;
  left: 2%;
  top: 50px;
  z-index: 3;
  width: 90%;
  max-height: 97px;
}
</style>