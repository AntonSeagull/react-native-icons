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
        "d": "M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 21l1 -9l7 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 11h6l5 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11.5 8.5l4.5 -3.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
