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
        "d": "M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 7v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
