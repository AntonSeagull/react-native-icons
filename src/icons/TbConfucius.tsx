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
        "d": "M9 19l3 2v-18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 10l8 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18l8 -10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18l-8 -8l8 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
