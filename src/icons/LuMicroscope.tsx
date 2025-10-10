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
        "d": "M6 18h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 22h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 22a7 7 0 1 0 0-14h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 14h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
