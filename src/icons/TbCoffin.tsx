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
        "d": "M7 3l-2 6l2 12h6l2 -12l-2 -6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 7v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 21h4l2 -12l-2 -6h-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
