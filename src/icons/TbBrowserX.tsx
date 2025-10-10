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
        "d": "M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8h16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 16l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16l-4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
