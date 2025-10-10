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
        "d": "M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 21l3 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21l-2 -4l-3 -3l1 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12l2 -3l4 -1l3 3l3 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
