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
        "d": "M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17v1a3 3 0 0 0 4.022 2.821"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 17v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
