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
        "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 10h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
