import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
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
        "d": "M3 21s10 -16 18 -16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 5h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
