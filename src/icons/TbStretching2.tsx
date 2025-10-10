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
        "d": "M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.5 21l3.5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 11l7 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21l-4 -7v-5l7 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
