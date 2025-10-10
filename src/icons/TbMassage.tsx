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
        "d": "M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 22l4 -2v-3h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 20h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14l3 -2l1 -4c3 1 3 4 3 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
