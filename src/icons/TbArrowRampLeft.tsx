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
        "d": "M17 3l0 8.707"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 7l4 -4l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 14l-4 -4l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 21a11 11 0 0 0 -11 -11h-3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
