import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M4 8l8 4l8 -4l-8 -4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 10l-4 2l4 2m8 0l4 -2l-4 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
