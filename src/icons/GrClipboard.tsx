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
        "d": "M16,3 L21,3 L21,23 L3,23 L3,3 L3,3 L8,3 M8,1 L16,1 L16,6 L8,6 L8,1 Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
