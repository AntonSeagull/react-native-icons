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
        "d": "M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.582 17.59a2 2 0 0 0 2.833 2.824"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14h-1.4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 6v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 8h2m4 0h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
