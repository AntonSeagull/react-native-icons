import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "role": "img",
    "viewBox": "0 0 24 24",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
