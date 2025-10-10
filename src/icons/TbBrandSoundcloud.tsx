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
        "d": "M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 8l0 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 17l0 -7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16l0 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
