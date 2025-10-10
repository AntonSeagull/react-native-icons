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
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
