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
        "d": "M11 9h-2a3 3 0 1 1 0 -6h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 18h-18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l3 3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
