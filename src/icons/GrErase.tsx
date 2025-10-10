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
        "d": "M7,21 L22,6 L18,2 L2,18 L5,21 L19,21 M6,14 L10,18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
