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
        "d": "M13 16v-8l2 5l2 -5v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M1 16v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M1 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 8v8h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
