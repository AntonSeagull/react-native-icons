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
        "d": "M22 12h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 9h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 15h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
