<template>
  <div>
    <div class="over"></div>

    <v-img
      class="img"
      src="https://vuetify-material-dashboard.vuetifyjs.com/img/register.85b37874.jpg"
    ></v-img>
    <v-container fluid class="px-md-16 ind mt-16">
      <v-card class="mx-md-16 py-16">
        <h1 class="font-weight-light ma-auto text-center">Register</h1>
        <v-row
          :class="{
            'mx-0': $vuetify.breakpoint.smAndDown,
          }"
        >
          <v-col md="6" sm="6" class="text-wrap pl-16 pr-8" cols="12">
            <v-card color="transparent" flat>
              <div v-for="i in info" :key="i.id" class="dplay text-wrap pt-7">
                <v-icon class="pr-5" size="37" :color="i.color">{{
                  i.icon
                }}</v-icon>
                <div class="pt-2 mr-16 text-wrap">
                  <span class="title font-weight-light">{{ i.titel }}</span>
                  <p class="text-wrap pt-3 grey--text font-weight-light body-2">
                    {{ i.text }}
                  </p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col md="6" sm="6" class="" cols="12">
            <v-card flat class="px-10">
              <div class="text-center">
                <v-btn
                  class="ma-1 white--text"
                  fab
                  small
                  depressed
                  v-for="i in infoform"
                  :key="i.id"
                  :color="i.color"
                >
                  <v-icon size="22" dark> {{ i.icon }} </v-icon>
                </v-btn>
                <p class="font-weight-light title pt-2">or be classical</p>
              </div>
              <form>
                <v-text-field
                  v-model="name"
                  prepend-icon=" mdi-face"
                  :error-messages="nameErrors"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-email"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock-outline"
                  :error-messages="emailErrors"
                  placeholder="password"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>

                <div class="d-flex">
                  <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="Do you agree the"
                    class="d-inline"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                  >
                  </v-checkbox>
                  <a class="pt-5 pl-1 purple--text" href="#">
                    terms and conditions
                  </a>
                </div>
              </form>
              <v-btn
                width="130px"
                height="45px"
                class="ma-auto d-block caption rounded-pill white--text"
                @click="submit"
                color="purple
"
              >
                Get Started
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "regist",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data() {
    return {
      name: "",
      email: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      infoform: [
        { icon: "mdi-twitter", color: "blue" },
        { icon: " mdi-github", color: "black" },
        { icon: " mdi-facebook ", color: "indigo" },
      ],
      info: [
        {
          color: "pink",
          icon: "mdi-chart-timeline-variant",
          titel: "Marketing",
          text:
            "We've created the marketing campaign of the website. It was a very interesting collaboration.",
        },
        {
          color: "purple",
          icon: "mdi-code-tags",
          titel: "Fully Coded in HTML5",
          text:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
        },
        {
          color: "cyan",
          icon: " mdi-account-multiple",
          titel: "Built Audience",
          text:
            "There is also a Fully Customizable CMS Admin Dashboard for this product.",
        },
      ],
    };
  },

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style>
.dplay {
  display: -webkit-inline-box !important;
  transition: all 1s !important;
}
.img {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
.ind {
  z-index: 100;
}
.over {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}
</style>