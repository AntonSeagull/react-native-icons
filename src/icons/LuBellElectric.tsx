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
        "d": "M18.518 17.347A7 7 0 0 1 14 19"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18.8 4A11 11 0 0 1 20 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
