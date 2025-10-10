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
        "d": "M4 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18V6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18V6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
