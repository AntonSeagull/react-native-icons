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
        "d": "M3 16v-6a2 2 0 1 1 4 0v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 13h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
