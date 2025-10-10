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
        "d": "M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3V7z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 9v8c0 1.103.897 2 2 2h8v-2H7V9H5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
