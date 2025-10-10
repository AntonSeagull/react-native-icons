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
        "fill": "#2196F3",
        "d": "M33.5,27c-2.2-3-5.2-5-9.5-5s-7.3,2-9.5,5H33.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#546E7A",
        "d": "M34.1,43H13.9c-1.1,0-1.9-0.8-2-1.9l-0.8-13C11.1,27,12,26,13.1,26h21.8c1.2,0,2.1,1,2,2.1l-0.8,13 C36,42.2,35.2,43,34.1,43z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
