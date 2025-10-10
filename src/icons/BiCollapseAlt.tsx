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
        "d": "M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
