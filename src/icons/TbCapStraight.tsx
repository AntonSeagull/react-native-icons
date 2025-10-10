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
        "d": "M8 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 6h-12a2 2 0 0 0 -2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14v2a2 2 0 0 0 2 2h12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
