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
        "d": "M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20h6"
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
