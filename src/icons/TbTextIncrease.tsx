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
        "d": "M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 13h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12h-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
