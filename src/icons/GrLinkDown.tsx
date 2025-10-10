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
        "d": "M12,2 L12,22 M3,11 L12,2 L21,11",
        "transform": "matrix(1 0 0 -1 0 24)"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
