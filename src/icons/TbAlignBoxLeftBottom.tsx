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
        "d": "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 14h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 11h-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
