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
        "d": "M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20l10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16l0 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 16l0 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 4h4v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9l5 -5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
