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
        "d": "M2 8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 8h-4v8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12h2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
