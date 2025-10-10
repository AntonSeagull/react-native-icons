import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 20 20",
    "fill": "currentColor",
    "aria-hidden": "true"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill-rule": "evenodd",
        "d": "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
