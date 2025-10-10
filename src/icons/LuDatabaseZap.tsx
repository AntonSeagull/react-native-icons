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
        "d": "M3 5V19A9 3 0 0 0 15 21.84"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 5V8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12L18 17H22L19 22"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12A9 3 0 0 0 14.59 14.87"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
