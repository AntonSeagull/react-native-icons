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
        "d": "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 8l-2 0l0 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14l0 2l2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 8l2 0l0 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 14l0 2l-2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
