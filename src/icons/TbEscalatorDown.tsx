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
        "d": "M4.5 7h2.733a2 2 0 0 1 1.337 .513l9.43 8.487h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1 -1.337 -.513l-9.43 -8.487h-1.5a2.5 2.5 0 1 1 0 -5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 3v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7l3 3l3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
