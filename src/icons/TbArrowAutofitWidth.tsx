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
        "d": "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 18h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 18h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15l-3 3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 15l3 3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
