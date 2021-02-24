import extend from "../components/forms/extend";
import mainhome from "../components/home/mainhome";
import Home from "../views/Home.vue";
import wizard from "../components/forms/wizard";
import regular from "../components/forms/regular";
import vald from "../components/forms/vald";

let form = [
  {
    path: "/",
    name: "Home",
    component: Home,

    children: [
      { path: "", name: "mainhome", component: mainhome },
      {
        path: "/extend",
        name: "extend",
        component: extend,
      },
      {
        path: "/wizard",
        name: "wizard",
        component: wizard,
      },
      {
        path: "/regular",
        name: "regular",
        component: regular,
      },
      {
        path: "/vald",
        name: "vald",
        component: vald,
      },
    ],
  },
];

export default form;
