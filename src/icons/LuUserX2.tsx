import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-user-x-2",
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
        "d": "M2 21a8 8 0 0 1 11.873-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m17 17 5 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 17-5 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
