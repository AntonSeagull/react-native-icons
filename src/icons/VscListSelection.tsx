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
        "d": "M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
