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
        "stroke": "#231F20",
        "stroke-width": "2",
        "d": "M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
