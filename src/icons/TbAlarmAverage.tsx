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
        "d": "M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 4l-2.75 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 4l2.75 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 13h1l2 3l2 -6l2 3h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
