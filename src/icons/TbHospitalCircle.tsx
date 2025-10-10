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
        "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
