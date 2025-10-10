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
        "d": "M3 9h8a5 5 0 1 1 5 5v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5l-4 4l4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
