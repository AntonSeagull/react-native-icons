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
        "d": "m12 17-5-5 5-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 18v-2a4 4 0 0 0-4-4H7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m7 17-5-5 5-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
