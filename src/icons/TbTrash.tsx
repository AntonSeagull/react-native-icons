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
        "d": "M4 7l16 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 11l0 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 11l0 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
