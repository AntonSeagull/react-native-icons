import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "currentColor"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 3a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
