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
        "d": "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16.85 18.58a9 9 0 1 0-9.7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14a5 5 0 1 1 8 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
