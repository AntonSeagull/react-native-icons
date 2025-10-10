import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "none",
    "viewBox": "0 0 24 24",
    "stroke-width": "1.5",
    "stroke": "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "d": "M5 12h14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
