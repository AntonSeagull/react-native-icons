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
        "d": "M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 15a6 6 0 1 0 12 0v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
