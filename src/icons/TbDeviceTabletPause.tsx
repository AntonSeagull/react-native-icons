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
        "d": "M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 17v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
