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
        "d": "M5.5 2L13 2L10.8125 5.5L3.3125 5.5L5.5 2Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.6875 9.5L5.1875 9.5L3.3125 6.5L10.8125 6.5L12.6875 9.5Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.6875 10.5L5.1875 10.5L3 14L10.5 14L12.6875 10.5Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
