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
        "d": "M2 5.5V13L5.5 10.8125V3.3125L2 5.5Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.5 12.6875V5.1875L6.5 3.3125V10.8125L9.5 12.6875Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.5 12.6875V5.1875L14 3V10.5L10.5 12.6875Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
