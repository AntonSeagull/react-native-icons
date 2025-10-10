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
        "d": "M16 3h5v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 21h2a2 2 0 0 0 2-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 3-5 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7V5a2 2 0 0 1 2-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
