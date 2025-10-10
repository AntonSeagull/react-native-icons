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
        "d": "M4 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
