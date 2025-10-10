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
        "d": "M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 19v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
