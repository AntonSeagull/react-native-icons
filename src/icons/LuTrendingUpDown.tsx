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
        "d": "M14.828 14.828 21 21"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 16v5h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 3-9 9-4-4-6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 8V3h-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
