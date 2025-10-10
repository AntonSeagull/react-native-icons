import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "none",
        "stroke": "#000000",
        "stroke-width": "2",
        "d": "M1,14 L6,2 L18,2 L23,14 L21,22 L3,22 L1,14 Z M1,14 L23,14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
