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
        "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 14h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 14h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 18v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 18v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
