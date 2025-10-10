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
        "d": "M3 11V9a4 4 0 0 1 4-4h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 13v2a4 4 0 0 1-4 4H3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
