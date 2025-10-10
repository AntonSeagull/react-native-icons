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
        "d": "M14 14a3 3 0 1 0 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 13v-9h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 5h-4m-4 0h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 13h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
