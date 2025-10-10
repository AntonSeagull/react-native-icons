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
        "d": "M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
