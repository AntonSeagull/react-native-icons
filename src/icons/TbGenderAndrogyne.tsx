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
        "d": "M13 11l6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 9v-4h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16.5 10.5l-3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
