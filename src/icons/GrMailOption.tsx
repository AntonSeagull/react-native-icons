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
        "stroke": "#000",
        "stroke-width": "2",
        "d": "M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
