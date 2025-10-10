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
        "d": "M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12l4.5 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 6l3 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
