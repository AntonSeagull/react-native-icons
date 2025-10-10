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
        "d": "M4 6l7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12l7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18l9 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 9l3 -3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 6l0 12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
