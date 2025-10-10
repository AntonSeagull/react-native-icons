import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-wrap-text",
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
        "d": "m16 16-3 3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12h14.5a1 1 0 0 1 0 7H13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 5h18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
