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
        "d": "M10 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 2v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
