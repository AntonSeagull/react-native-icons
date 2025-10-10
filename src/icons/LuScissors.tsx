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
        "d": "M8.12 8.12 12 12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 4 8.12 15.88"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.8 14.8 20 20"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
