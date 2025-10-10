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
        "d": "M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 18h-1a6 6 0 1 1 0 -12h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 20v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 6v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
