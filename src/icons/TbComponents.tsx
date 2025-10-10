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
        "d": "M3 12l3 3l3 -3l-3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 12l3 3l3 -3l-3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 6l3 3l3 -3l-3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18l3 3l3 -3l-3 -3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
