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
        "d": "M4 15l3 3l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 6v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v3a2 2 0 0 1 -2 2h-1.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
