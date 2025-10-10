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
        "d": "M14 3v4a1 1 0 0 0 1 1h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 15l2 6l2 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 15v4.5a1.5 1.5 0 0 0 3 0v-4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 15h-3v6h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 18h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
