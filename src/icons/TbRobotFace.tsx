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
        "d": "M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16c1 .667 2 1 3 1s2 -.333 3 -1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 7l-1 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7l1 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12v-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 12v-1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
