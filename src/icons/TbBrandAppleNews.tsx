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
        "d": "M4 14l6 6h-6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10l-6 -6h6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 4v4l12 12h4v-4l-12 -12z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
