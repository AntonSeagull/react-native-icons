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
        "d": "M1 2L2 1H14L15 2V14L14 15H2L1 14V2ZM2 2V10H10V2H2ZM11 2V14H14V2H11Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
