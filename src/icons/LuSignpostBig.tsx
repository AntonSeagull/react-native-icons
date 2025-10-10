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
        "d": "M10 9H4L2 7l2-2h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 5h6l2 2-2 2h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 22V4a2 2 0 1 1 4 0v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 22h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
