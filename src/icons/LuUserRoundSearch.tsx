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
        "d": "M2 21a8 8 0 0 1 10.434-7.62"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 22-1.9-1.9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
