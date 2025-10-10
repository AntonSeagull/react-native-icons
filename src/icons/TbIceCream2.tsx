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
        "d": "M17.657 11a6 6 0 1 0 -11.315 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.342 11l5.658 11l5.657 -11z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
