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
        "d": "M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 10v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 7h-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 11l-4 -4l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
