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
        "d": "M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 15v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 18v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 18v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 15v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
