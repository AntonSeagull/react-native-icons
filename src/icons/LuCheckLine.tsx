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
        "d": "M20 4L9 15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 19L3 19"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15L4 10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
