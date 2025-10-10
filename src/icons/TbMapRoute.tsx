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
        "d": "M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 13v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 15l-4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 15l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
