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
        "d": "M6 4h12v2H6zm5 4v6H6l6 6 6-6h-5V8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
