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
        "d": "m5 8 6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m4 14 6-6 2-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 5h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 2h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 22-5-10-5 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 18h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
