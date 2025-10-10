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
        "d": "M4 7h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 4v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 19l14 -14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
