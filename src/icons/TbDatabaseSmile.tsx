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
        "d": "M10 14h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 17a3.5 3.5 0 0 0 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 6v12c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
