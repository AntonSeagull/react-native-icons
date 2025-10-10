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
        "d": "m4 6 3-3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14 6 3-3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 21h16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
