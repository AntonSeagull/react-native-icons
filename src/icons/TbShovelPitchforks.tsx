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
        "d": "M5 3h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 3v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 15h6v3a3 3 0 0 1 -6 0v-3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21v-3a3 3 0 0 1 6 0v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 21v-18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
