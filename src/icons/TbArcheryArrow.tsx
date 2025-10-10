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
        "d": "M14 7v3h3l3 -3h-3v-3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10l-9 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 15v4h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
