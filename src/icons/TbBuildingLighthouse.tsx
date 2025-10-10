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
        "d": "M12 3l2 3l2 15h-8l2 -15z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9l8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 11l2 -2l-2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 11l-2 -2l2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
