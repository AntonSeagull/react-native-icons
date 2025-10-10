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
        "d": "M11 20a3 3 0 0 1 -3 -3v-9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125"
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
