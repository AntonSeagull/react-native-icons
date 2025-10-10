import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-arrow-down-left-from-circle",
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
        "d": "M2 12a10 10 0 1 1 10 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 22 10-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 22H2v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
