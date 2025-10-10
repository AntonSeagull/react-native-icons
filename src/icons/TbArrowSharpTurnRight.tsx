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
        "d": "M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 16h5v-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
