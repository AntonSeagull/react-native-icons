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
        "d": "m15 18-.722-3.25"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 8a10.645 10.645 0 0 0 20 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m20 15-1.726-2.05"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m4 15 1.726-2.05"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 18 .722-3.25"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
