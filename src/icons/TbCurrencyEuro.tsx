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
        "d": "M17.2 7a6 7 0 1 0 0 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 10h-8m0 4h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
