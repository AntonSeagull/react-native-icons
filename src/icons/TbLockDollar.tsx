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
        "d": "M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11v-4a4 4 0 1 1 8 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 21v1m0 -8v1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
