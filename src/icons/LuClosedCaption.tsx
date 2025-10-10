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
        "d": "M10 9.17a3 3 0 1 0 0 5.66"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 9.17a3 3 0 1 0 0 5.66"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
