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
        "d": "M3 19l.01 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19a4 4 0 0 0 -4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 19a8 8 0 0 0 -8 -8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
