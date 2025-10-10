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
        "d": "M7 5h6a3.5 3.5 0 0 1 0 7h-6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
