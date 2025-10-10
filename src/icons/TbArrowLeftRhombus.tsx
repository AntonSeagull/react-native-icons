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
        "d": "M16 12h-13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 9l-3 3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
