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
        "d": "M3 11.5l4.5 4.5h9l-9 -9z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
