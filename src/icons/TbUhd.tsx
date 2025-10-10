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
        "d": "M10 16v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 8v6a2 2 0 1 0 4 0v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
