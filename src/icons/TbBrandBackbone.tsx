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
        "d": "M5 20l14 -8l-14 -8z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 20l-14 -8l14 -8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
