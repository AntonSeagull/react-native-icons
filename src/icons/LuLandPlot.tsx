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
        "d": "m12 8 6-3-6-3v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6.49 12.85 11.02 6.3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.51 12.85 6.5 19.15"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
