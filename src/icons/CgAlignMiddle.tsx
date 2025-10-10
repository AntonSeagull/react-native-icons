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
        "d": "M13 9H17V15H13V9Z",
        "fill": "currentColor",
        "fill-opacity": "0.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 6H11V18H7V6Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
