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
        "fill": "#616161",
        "d": "M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#424242",
        "d": "M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#242424",
        "d": "M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
