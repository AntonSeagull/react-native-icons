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
        "d": "m18 19 1-7-6 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m5 8 3-3 5.5 3-2.36 3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.24 14.5a5 5 0 0 0 6.88 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13.76 17.5a5 5 0 0 0-6.88-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
