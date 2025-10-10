import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-bar-chart",
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
        "d": "M5 21v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21V9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 21V3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
