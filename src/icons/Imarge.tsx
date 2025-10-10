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
        "d": "M16 0h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M16 16v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M0 16h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M0 0v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
