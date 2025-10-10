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
        "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
