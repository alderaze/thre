import mapg from "../components/map/mapg";
import full from "../components/map/fullscreen";
import mainhome from "../components/home/mainhome";
import Home from "../views/Home.vue";

let map = [
  {
    path: "/",
    name: "Home",
    component: Home,

    children: [
      { path: "", name: "mainhome", component: mainhome },
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
    ],
  },
];

export default map;
