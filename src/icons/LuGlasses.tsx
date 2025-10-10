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
        "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
