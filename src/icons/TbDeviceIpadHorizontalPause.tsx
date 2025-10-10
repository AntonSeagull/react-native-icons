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
        "d": "M13 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 17v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
