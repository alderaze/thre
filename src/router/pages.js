import price from "../components/pages/price";
import mainpages from "../components/pages/mainpages";
import long from "../components/pages/long";

import regist from "../components/pages/regist";
let page = [
  {
    path: "/mainpages",
    name: "mainpages",
    component: mainpages,

    children: [
      {
        path: "/mainpages/price",
        name: "price",
        component: price,
      },

      {
        path: "/mainpages/long",
        name: "long",
        component: long,
      },

      {
        path: "/mainpages/regist",
        name: "regist",
        component: regist,
      },
    ],
  },
];

export default page;
