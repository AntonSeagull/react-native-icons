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
        "d": "M8 3h-2l-3 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3h2l3 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 16h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
