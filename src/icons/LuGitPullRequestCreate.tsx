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
        "d": "M6 9v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 6h3a2 2 0 0 1 2 2v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 18h-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
