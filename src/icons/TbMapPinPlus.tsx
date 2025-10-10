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
        "d": "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
