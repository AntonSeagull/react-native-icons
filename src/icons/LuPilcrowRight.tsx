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
        "d": "M10 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9H7a1 1 0 0 1 0-6h8"
      },
      "child": []
    },
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
        "d": "m18 14 4 4H2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 18-4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
