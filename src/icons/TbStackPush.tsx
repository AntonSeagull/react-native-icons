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
        "d": "M6 10l-2 1l8 4l8 -4l-2 -1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 15l8 4l8 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 4v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8l-3 3l-3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
