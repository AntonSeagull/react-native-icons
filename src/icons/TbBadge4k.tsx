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
        "d": "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 9v2a1 1 0 0 0 1 1h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 9l-2 3l2 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 12h-1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
