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
        "d": "M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 12h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 3v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 3h-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
