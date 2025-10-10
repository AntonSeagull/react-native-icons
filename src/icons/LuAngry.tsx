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
        "d": "M16 16s-1.5-2-4-2-4 2-4 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.5 8 10 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m14 9 2.5-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 10h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 10h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
