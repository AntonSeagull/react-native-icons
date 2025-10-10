import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1",
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 48 48",
    "enable-background": "new 0 0 48 48"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#FF5722",
        "d": "M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#FFCCBC",
        "d": "M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
