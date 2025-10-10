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
        "d": "M17 12v4a1 1 0 0 1-1 1h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3h2a2 2 0 0 1 2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 8V7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 17v2a2 2 0 0 1-2 2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7V5a2 2 0 0 1 2-2h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 21H5a2 2 0 0 1-2-2v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
