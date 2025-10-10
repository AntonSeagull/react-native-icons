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
        "d": "M22 11v1a10 10 0 1 1-9-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14s1.5 2 4 2 4-2 4-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 5h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 2v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
