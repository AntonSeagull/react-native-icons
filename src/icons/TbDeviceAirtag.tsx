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
        "d": "M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15a6 6 0 0 0 -6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15a3 3 0 0 0 -3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
