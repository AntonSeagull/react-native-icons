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
        "d": "M14 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 9h-3a3 3 0 0 1 0-6h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 18H2l4-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6 22-4-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
