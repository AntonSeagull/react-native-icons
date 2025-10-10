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
        "d": "M8 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19c1.213 0 2.31 -.723 2.788 -1.838l4.424 -10.324a3.033 3.033 0 0 1 2.788 -1.838"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
