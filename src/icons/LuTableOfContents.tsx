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
        "d": "M16 5H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 5h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 19h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
