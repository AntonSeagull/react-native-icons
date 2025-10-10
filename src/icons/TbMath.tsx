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
        "d": "M19 5h-7l-4 14l-3 -6h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 13l6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19l6 -6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
