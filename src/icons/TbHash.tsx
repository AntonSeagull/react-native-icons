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
        "d": "M5 9l14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 15l14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 4l-4 16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 4l-4 16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
