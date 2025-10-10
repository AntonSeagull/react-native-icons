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
        "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 7l1 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 13l6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 17l2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
