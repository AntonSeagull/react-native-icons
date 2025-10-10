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
        "d": "M9 17H7A5 5 0 0 1 7 7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7h2a5 5 0 0 1 4 8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
