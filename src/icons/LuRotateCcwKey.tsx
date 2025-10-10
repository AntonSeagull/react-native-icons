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
        "d": "m14.5 9.5 1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m15.5 8.5-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3v5h5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
