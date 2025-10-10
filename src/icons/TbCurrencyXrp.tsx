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
        "d": "M5 5l3.585 3.585a4.83 4.83 0 0 0 6.83 0l3.585 -3.585"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 19l3.585 -3.585a4.83 4.83 0 0 1 6.83 0l3.585 3.584"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
