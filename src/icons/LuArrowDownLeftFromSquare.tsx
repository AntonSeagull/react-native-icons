import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-arrow-down-left-from-square",
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
        "d": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m3 21 9-9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21H3v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
