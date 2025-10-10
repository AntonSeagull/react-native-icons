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
        "d": "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 21l-6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 13v1m0 -8v1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
