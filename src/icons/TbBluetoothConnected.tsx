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
        "d": "M7 8l10 8l-5 4l0 -16l5 4l-10 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12l1 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 12l1 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
