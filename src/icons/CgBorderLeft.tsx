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
        "d": "M16 8V16H9L9 19H19L19 5L9 5V8H16Z",
        "fill": "currentColor",
        "fill-opacity": "0.3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5L7 19H4L4 5L7 5Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
