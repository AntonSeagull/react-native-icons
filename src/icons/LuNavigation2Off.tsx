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
        "d": "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.53 8.88 12 2l-1.17 3.17"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
