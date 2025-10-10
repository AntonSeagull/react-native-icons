import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "width": "16",
    "height": "16",
    "viewBox": "0 0 16 16"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M9 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
