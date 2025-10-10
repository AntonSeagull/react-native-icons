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
        "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12H2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12H8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 12h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
