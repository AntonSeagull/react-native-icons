import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 7l4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 11l2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 15l2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 11l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
