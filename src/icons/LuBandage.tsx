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
        "d": "M10 10.01h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 14.01h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10.01h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14.01h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 6v11.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 6v12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
