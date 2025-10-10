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
        "d": "M11 9H13V15H11V9Z",
        "stroke": "currentColor",
        "stroke-opacity": "0.5",
        "stroke-width": "2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 5V19H7V5H5Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 5V19H19V5H17Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
