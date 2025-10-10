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
        "d": "M6 21l15 -15l-3 -3l-15 15l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 6l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
