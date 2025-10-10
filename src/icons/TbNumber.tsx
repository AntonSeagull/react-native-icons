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
        "d": "M4 17v-10l7 10v-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 17h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
