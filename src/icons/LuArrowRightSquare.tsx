import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-arrow-right-square",
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
        "d": "M8 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m12 16 4-4-4-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
