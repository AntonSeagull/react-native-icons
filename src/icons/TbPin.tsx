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
        "d": "M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15l-4.5 4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.5 4l5.5 5.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
