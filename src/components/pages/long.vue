<template>
  <div>
    <div class="over"></div>

    <v-img
      class="img"
      src="https://vuetify-material-dashboard.vuetifyjs.com/img/login.d6d3bb09.jpg"
    ></v-img>
    <p class="ma-16 pa-1"></p>

    <v-card flat class="ma-auto px-4 py-8 mt-16" width="350px">
      <v-card flat width="100%" color="pink" class="text-center pa-1 mt-n14">
        <h1 class="font-weight-bold pa-5 title white--text pt-2">long in</h1>

        <v-icon
          v-for="i in infoform"
          class="pa-3"
          :key="i.id"
          color="white"
          size="26"
          dark
        >
          {{ i.icon }}
        </v-icon>
      </v-card>
      <form>
        <v-text-field
          v-model="name"
          prepend-icon=" mdi-face"
          :error-messages="nameErrors"
          placeholder="Name"
          class="pt-8"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-email"
          v-model="email"
          class="pt-8"
          :error-messages="emailErrors"
          placeholder="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          class="pt-8"
          prepend-icon="mdi-lock-outline"
          :error-messages="emailErrors"
          placeholder="password"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </form>
      <v-btn
        width="110px"
        height="50px"
        class="ma-auto mt-8 d-block caption rounded-pill pink--text"
        @click="submit"
        depressed
        color="transparent"
      >
        Let's Go
      </v-btn>
    </v-card>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "logn",
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
        { icon: " mdi-google-plus", color: "black" },
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