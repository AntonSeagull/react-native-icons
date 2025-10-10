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
        "d": "M3 17h4v4h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3h4v4h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
