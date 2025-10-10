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
        "d": "M3 21h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 21v-18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 9h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 13h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
