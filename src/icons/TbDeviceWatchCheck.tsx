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
        "d": "M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v5.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18v3h2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 6v-3h6v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 19l2 2l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
