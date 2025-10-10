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
        "d": "M1,22 L23,22 L23,2 L1,2 L1,22 Z M12,2 L12,22 L12,2 Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
