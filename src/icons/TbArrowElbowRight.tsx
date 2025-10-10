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
        "d": "M21 14v-6h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 8l-9 9l-9 -9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
