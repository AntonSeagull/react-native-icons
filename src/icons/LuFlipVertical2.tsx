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
        "d": "m17 3-5 5-5-5h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m17 21-5-5-5 5h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12H2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12H8"
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
