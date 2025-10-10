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
        "d": "M5.636 19.364a9 9 0 1 1 12.728 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9l-4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
