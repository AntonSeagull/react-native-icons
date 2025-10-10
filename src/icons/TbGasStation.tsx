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
        "d": "M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 20l12 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 7v1a1 1 0 0 0 1 1h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 11l10 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
