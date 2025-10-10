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
        "d": "M11 21l1 -5l-1 -4l-3 -4h4l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 16l-1 -4l3 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13.5 12h2.5l4 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
