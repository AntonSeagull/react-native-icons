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
        "d": "M3.5 21 14 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20.5 21 10 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.5 21 12 15l-3.5 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 21h20"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
