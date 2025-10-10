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
        "d": "M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 15v-11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 15v-11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 19h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 21l-2 -2l2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
