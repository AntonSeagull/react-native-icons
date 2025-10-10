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
        "d": "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 18h18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
