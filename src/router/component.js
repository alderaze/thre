import Home from "../views/Home.vue";
import buttons from "../components/component/buttons";
import mainhome from "../components/home/mainhome";
import grid from "../components/component/grid";
import icon from "../components/component/icon";
import not from "../components/component/not";
import tabs from "../components/component/tabs";
import mapg from "../components/map/mapg";
import full from "../components/map/fullscreen";
import extend from "../components/forms/extend";
import wizard from "../components/forms/wizard";
import regular from "../components/forms/regular";
import vald from "../components/forms/vald";
import screen from "../components/pages/screen";
import rtl from "../components/pages/rtl";
import time from "../components/pages/time";

let component = [
  {
    path: "/",
    name: "Home",
    component: Home,

    children: [
      {
        path: "/",
        name: "mainhome",
        component: mainhome,
      },
      {
        path: "/componat/screen",
        name: "screen",
        component: screen,
      },
      {
        path: "/componat/rtl",
        name: "rtl",
        component: rtl,
      },
      {
        path: "/componat/time",
        name: "time",
        component: time,
      },
      {
        path: "/buttons",
        name: "buttons",
        component: buttons,
      },
      {
        path: "/tabs",
        name: "tabs",
        component: tabs,
      },
      {
        path: "/icon",
        name: "icon",
        component: icon,
      },

      {
        path: "/grid",
        name: "grid",
        component: grid,
      },
      {
        path: "/not",
        name: "not",
        component: not,
      },
      {
        path: "/mapg",
        name: "mapg",
        component: mapg,
      },
      {
        path: "/fullscreen",
        name: "full",
        component: full,
      },
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

export default component;
