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
        "d": "M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
