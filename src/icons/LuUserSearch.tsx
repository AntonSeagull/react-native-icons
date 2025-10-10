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
        "d": "M10.3 15H7a4 4 0 0 0-4 4v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 21-1.9-1.9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
