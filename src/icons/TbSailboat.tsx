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
        "d": "M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18l-1 -3h18l-1 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h7l-7 -9v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 7l-2 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
