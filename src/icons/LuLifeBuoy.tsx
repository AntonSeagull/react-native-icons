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
        "d": "m4.93 4.93 4.24 4.24"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14.83 9.17 4.24-4.24"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14.83 14.83 4.24 4.24"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9.17 14.83-4.24 4.24"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
