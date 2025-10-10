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
        "d": "M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16l9 -6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 9h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 5l5.65 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
