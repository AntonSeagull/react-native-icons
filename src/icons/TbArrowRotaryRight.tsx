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
        "d": "M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 10v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 11l4 -4l-4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 7h10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
