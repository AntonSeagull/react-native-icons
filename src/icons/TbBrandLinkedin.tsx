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
        "d": "M8 11v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 8v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16v-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16v-3a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
