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
        "d": "M7 11l5-5m0 0l5 5m-5-5v12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
