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
        "d": "m2 2 20 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19.08 19.08A10 10 0 1 1 4.92 4.92"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
