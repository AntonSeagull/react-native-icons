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
        "d": "M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 3v4h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17l0 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 14l0 7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 13l0 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12l0 9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
