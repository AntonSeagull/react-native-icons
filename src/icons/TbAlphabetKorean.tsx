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
        "d": "M7 7h6c0 2.5 -1.593 8.474 -6 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 5v14z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
