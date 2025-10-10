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
        "d": "M7 7h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 7v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 17a2 2 0 0 1-2-2V7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
