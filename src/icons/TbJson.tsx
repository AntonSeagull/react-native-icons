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
        "d": "M20 16v-8l3 8v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
