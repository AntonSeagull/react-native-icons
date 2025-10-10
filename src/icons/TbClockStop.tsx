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
        "d": "M21 12a9 9 0 1 0 -9 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v5l1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16h6v6h-6z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
