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
        "d": "M11 12h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 9l3 3l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
