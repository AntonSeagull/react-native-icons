import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "none",
    "viewBox": "0 0 24 24",
    "stroke-width": "2",
    "stroke": "currentColor",
    "aria-hidden": "true"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "d": "M4 6h16M4 12h16M4 18h16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
