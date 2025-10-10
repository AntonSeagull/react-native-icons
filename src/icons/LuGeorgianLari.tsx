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
        "d": "M11.5 21a7.5 7.5 0 1 1 7.35-9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 12V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 21h16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12V3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
