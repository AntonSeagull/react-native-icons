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
        "d": "M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9l3 6l3 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 20l6 -16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
