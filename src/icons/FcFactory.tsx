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
        "fill": "#BF360C",
        "d": "M41.2,5h-7.3L32,43h11L41.2,5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#E64A19",
        "d": "M33,23h-4v-6l-12,6v-6L5,23v20h28V23z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
