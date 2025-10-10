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
        "d": "m10.2 6.3-3.9 3.9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m13.8 17.7 3.9-3.9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
