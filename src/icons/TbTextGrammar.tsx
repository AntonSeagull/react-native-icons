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
        "d": "M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12v-5a3 3 0 1 1 6 0v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 9h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 6v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 16h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20l2 2l5 -5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
