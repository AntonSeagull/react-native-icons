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
        "d": "M4 7h3m4 0h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 17h13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 7v13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 4v9m0 4v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
