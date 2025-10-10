import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M8 8H16V15H19V5H5V15H8V8Z",
        "fill": "currentColor",
        "fill-opacity": "0.3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 17H19V20H5V17Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
