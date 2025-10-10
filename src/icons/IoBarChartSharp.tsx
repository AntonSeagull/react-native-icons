import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M192,432H80V208H192Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M336,432H224V160H336Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M479.64,432h-112V96h112Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
