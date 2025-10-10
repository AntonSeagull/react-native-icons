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
        "d": "M7 8h10v8a5 5 0 0 1 -10 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 8v-5h6v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
