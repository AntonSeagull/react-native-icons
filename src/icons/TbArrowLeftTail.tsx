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
        "d": "M18 12h-15"
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
        "d": "M21 9l-3 3l3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
