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
        "d": "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 3 19.1 5.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 3 20.9 5.2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
