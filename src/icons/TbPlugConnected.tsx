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
        "d": "M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 21l2.5 -2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18.5 5.5l2.5 -2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 11l-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 14l-2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
