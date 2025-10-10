import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-text",
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
        "d": "M21 5H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 12H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 19H3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
