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
        "d": "m9 12 2 2 4-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 19H2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
