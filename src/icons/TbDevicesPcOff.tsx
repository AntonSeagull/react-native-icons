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
        "d": "M9 9v10h-6v-14h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 9h9v7h-2m-4 0h-4v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 13v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 16v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
