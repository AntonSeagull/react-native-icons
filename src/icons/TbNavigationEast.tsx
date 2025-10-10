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
        "d": "M14 3h-4v6h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 6h2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21l-4 -8l-4 8l4 -2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
