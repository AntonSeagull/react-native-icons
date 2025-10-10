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
        "d": "M14 3v4a1 1 0 0 0 1 1h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21v-4a2 2 0 1 1 4 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
