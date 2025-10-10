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
        "d": "M2,5 L8,11 L2,17 M9,17 L23,17"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
