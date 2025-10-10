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
        "d": "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 14v-4a2 2 0 1 1 4 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 12h-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
