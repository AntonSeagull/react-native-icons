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
        "d": "M4 20l16 -16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 4h7v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.5 12.5l5 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
