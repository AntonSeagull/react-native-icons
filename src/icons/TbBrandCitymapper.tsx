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
        "d": "M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 9l3 3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
