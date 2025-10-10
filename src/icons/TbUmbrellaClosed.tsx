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
        "d": "M9 16l3 -13l3 13z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16v3c0 2.667 4 2.667 4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
