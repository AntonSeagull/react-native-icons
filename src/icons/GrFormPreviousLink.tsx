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
        "d": "M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8",
        "transform": "matrix(-1 0 0 1 24 0)"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
