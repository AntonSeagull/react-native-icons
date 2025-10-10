import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 16 16",
    "xmlns": "http://www.w3.org/2000/svg",
    "fill": "currentColor"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M6 12v-1h4v1H6zM4 7h8v1H4V7zm10-4v1H2V3h12z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
