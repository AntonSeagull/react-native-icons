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
        "d": "M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 17l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 13l0 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11.75 8.75a4 4 0 0 1 6.5 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 6.5a8 8 0 0 1 13 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
