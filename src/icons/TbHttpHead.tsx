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
        "d": "M3 16v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 8h-4v8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12h2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 16v-6a2 2 0 1 1 4 0v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 13h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
