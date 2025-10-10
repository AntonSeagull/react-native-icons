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
        "d": "M18 16v-8h2a2 2 0 1 1 0 4h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16v-8l3 6l3 -6v8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
