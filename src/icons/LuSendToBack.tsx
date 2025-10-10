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
        "d": "M7 14v1a2 2 0 0 0 2 2h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 7h1a2 2 0 0 1 2 2v1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
