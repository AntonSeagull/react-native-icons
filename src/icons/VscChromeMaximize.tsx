import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 16 16",
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "currentColor"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M3 3v10h10V3H3zm9 9H4V4h8v8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
