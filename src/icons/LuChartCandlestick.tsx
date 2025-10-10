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
        "d": "M9 5v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 13v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3v16a2 2 0 0 0 2 2h16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
