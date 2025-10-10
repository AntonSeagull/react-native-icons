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
        "d": "M22 12h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 9h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 15h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19c1.778 -4.667 1.778 -9.333 0 -14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
