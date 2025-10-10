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
        "d": "M5 3 2 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 6-3-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.38 18.7 4 21"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.64 18.67 20 21"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 13 2 2 4-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
