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
        "d": "M11 7a2 2 0 1 0 -2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 11v4h4l4 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 11h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 11.5a5 5 0 1 0 6 7.5"
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
