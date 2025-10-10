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
        "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6.41 6.41 11.18 11.18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
