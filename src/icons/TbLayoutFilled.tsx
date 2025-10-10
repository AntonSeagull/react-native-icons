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
        "d": "M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-1a3 3 0 0 1 3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
