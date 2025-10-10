import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-arrow-down-circle",
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
        "d": "M12 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m8 12 4 4 4-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
