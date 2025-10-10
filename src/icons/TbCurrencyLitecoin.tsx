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
        "d": "M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 9l-9 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
