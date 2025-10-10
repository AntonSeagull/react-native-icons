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
        "d": "M5 11h14v-3h-14z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.5 11l-1.5 10h-8l-1.5 -10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 5v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
