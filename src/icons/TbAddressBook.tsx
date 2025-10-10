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
        "d": "M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 16h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 16h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
