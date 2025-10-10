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
        "d": "M9,4 L4,9 L9,14 M18,19 L18,9 L5,9",
        "transform": "matrix(1 0 0 -1 0 23)"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
