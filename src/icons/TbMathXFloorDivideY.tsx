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
        "d": "M1.5 19l18 -18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.5 22l18 -18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l3 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M23 15l-4.5 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M1 1l6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M1 7l6 -6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
