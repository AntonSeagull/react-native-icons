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
        "d": "M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19l2 2l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
