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
        "d": "M3 11h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 17h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
