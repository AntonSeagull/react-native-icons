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
        "d": "M3 3l18 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
