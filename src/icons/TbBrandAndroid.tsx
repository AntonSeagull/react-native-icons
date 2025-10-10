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
        "d": "M4 10l0 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10l0 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 3l1 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 3l-1 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 18l0 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
