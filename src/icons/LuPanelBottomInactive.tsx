import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-panel-bottom-inactive",
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
        "d": "M14 15h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 15h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 15h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
