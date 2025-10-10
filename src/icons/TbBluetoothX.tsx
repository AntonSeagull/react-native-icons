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
        "d": "M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 6l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 6l-4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
