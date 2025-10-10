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
        "d": "M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17v-13h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 5h-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9l10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 13h-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
