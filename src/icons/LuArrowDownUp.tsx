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
        "d": "m3 16 4 4 4-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20V4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 8-4-4-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 4v16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
