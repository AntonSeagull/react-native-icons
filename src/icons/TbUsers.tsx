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
        "d": "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3.13a4 4 0 0 1 0 7.75"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 21v-2a4 4 0 0 0 -3 -3.85"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
