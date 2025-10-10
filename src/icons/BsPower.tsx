import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "16",
    "height": "16",
    "fill": "currentColor",
    "class": "bi bi-power",
    "viewBox": "0 0 16 16"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M7.5 1v7h1V1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
