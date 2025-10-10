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
        "d": "M10 9.5 8 12l2 2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21h1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14 9.5 2 2.5-2 2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
