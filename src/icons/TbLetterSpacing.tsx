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
        "d": "M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 4l3 8l3 -8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 18h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 20l2 -2l-2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 16l-2 2l2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
