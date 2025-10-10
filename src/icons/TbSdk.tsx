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
        "d": "M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 8l-3 4l3 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 12h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
