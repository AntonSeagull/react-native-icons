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
        "d": "M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12l-5 -4v8z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
