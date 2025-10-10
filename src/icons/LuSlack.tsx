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
        "d": "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
