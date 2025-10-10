import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "viewBox": "0 0 24 24",
    "width": "24",
    "height": "24",
    "xmlns": "http://www.w3.org/2000/svg",
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
        "d": "M18 8h1a4 4 0 0 1 0 8h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
