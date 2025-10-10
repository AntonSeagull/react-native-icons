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
        "d": "M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 6l0 12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12l6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 3l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 18l0 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
