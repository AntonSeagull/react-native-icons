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
        "d": "M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 14.5v4.5l4 2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17l4 -2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 4h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
