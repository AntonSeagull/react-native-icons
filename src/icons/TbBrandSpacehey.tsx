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
        "d": "M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20h6v-6a3 3 0 0 0 -6 0v6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
