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
        "d": "M18 15a6 6 0 1 1 -12 0v-6a6 6 0 1 1 12 0v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8l3 3l3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
