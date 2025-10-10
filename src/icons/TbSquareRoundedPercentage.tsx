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
        "d": "M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15.075l6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9.105v.015"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15.12v.015"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
