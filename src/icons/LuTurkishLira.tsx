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
        "d": "M15 4 5 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m15 8.5-10 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 12a9 9 0 0 1-9 9V3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
