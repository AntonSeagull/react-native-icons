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
        "d": "M13 20h-8a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.958 13.506a3 3 0 1 0 -1.735 2.235"
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
