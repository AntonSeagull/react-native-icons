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
        "d": "M18 7c0-5.333-8-5.333-8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 7v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 21h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 13h10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
