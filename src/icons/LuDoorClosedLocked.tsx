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
        "d": "M10 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 20h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 17v-2a2 2 0 1 0-4 0v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
