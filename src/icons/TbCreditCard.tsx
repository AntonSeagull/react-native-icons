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
        "d": "M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10l18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 15l.01 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 15l2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
