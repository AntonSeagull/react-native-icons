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
        "d": "M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 18l-1 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 18l1 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
