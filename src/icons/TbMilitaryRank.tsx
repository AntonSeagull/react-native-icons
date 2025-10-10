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
        "d": "M18 7v12a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-12l6 -4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 13l2 -1l2 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 17l2 -1l2 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9l2 -1l2 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
