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
        "d": "M3 21h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 21v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 13h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
