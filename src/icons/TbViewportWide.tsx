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
        "d": "M10 12h-7l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 12h7l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
