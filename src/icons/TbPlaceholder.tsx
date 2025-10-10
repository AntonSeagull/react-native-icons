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
        "d": "M10 20.415a8 8 0 1 0 3 -15.415h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 8l-3 -3l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17l4 -4l-4 -4l-4 4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
