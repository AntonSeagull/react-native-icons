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
        "d": "M15 15h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 9h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
