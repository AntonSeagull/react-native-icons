import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
