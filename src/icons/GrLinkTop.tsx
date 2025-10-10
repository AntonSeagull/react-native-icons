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
        "d": "M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
