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
        "d": "M22 12h-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 12h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 7l8 5l-8 5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 7h2v10h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
