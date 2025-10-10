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
        "d": "M2,7 L20,7 M16,2 L21,7 L16,12 M22,17 L4,17 M8,12 L3,17 L8,22"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
