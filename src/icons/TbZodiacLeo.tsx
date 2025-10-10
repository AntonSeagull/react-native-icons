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
        "d": "M13 17a4 4 0 1 0 8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 7c0 3 2 5 2 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7c0 4 -2 6 -2 10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
