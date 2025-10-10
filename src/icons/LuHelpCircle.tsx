import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-help-circle",
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
        "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
