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
        "d": "M9 19h8.5c.4 0 .9-.1 1.3-.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m2 2 20 20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15.3a3.5 3.5 0 0 0-3.3-3.3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 5h-4.3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
