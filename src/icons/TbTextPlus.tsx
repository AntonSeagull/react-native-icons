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
        "d": "M19 10h-14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 6h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14h-9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 18h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 18h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
