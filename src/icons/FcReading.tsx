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
        "fill": "#5C6BC0",
        "d": "M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#7986CB",
        "d": "M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
