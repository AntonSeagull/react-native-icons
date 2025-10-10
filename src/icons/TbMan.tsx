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
        "d": "M10 16v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9h6l-1 7h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 11c1.333 -1.333 2.667 -2 4 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 11c-1.333 -1.333 -2.667 -2 -4 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
