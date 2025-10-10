import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-percent-square",
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
        "d": "m15 9-6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
