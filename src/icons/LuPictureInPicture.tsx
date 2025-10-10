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
        "d": "M2 10h6V4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 4 6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 10V7a2 2 0 0 0-2-2h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 14v2a2 2 0 0 0 2 2h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
