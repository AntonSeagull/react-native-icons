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
        "d": "M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679 -2.322a9 9 0 0 0 -12.08 -12.086"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 10h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 10h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.5 15a3.5 3.5 0 0 0 5 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
