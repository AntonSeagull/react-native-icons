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
        "d": "M21 12h-6h1a3 3 0 0 1 0 6h-1l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5v8a3 3 0 0 0 3 3h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
