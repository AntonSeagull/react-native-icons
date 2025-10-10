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
        "d": "M11 13v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 5v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3v16a2 2 0 0 0 2 2h16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
