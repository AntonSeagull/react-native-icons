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
        "d": "M2 1L1 2V14L2 15H14L15 14V2L14 1H2ZM2 14V2H6V14H2ZM10 14V2H14V14H10Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
