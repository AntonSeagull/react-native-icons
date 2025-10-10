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
        "d": "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 13h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 3l6 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
