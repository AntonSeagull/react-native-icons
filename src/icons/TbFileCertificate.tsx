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
        "d": "M14 3v4a1 1 0 0 0 1 1h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
