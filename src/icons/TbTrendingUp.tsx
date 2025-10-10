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
        "d": "M3 17l6 -6l4 4l8 -8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 7l7 0l0 7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
