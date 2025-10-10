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
        "d": "M3 21v-15l5 -3l5 3v15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 21v-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 14h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 10a2 2 0 1 1 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 13c6 0 3 8 8 8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
