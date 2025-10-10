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
        "d": "M5.42 9.42 8 12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14 6-8.58 8.58"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.8 14.8 14 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 12h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
