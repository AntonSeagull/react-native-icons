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
        "d": "m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
