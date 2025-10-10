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
        "d": "M15 9v8a2 2 0 1 0 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 9h-14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 5h-14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9v4c0 2.5 -.667 4 -2 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
