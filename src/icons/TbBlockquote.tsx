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
        "d": "M6 15h15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 19h-15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 11h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 7h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
