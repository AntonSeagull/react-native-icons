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
        "d": "M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
