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
        "d": "M3 7v4a1 1 0 0 0 1 1h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 7v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 7v4a1 1 0 0 0 1 1h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 7v10"
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
