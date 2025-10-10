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
        "d": "M12 9m-9 0a9 3 0 1 0 18 0a9 3 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
