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
        "d": "M4 12a8 8 0 0 1 16 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v6a2 2 0 0 0 4 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
