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
        "d": "M21 17a9 9 0 0 0-15-6.7L3 13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7v6h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
