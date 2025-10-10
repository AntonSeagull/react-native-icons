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
        "d": "M10 4V2H4v20h6v-2H6V4zm4 16v2h6V2h-6v2h4v16z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
