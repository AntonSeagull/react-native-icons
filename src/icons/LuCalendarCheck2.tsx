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
        "d": "M8 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16 20 2 2 4-4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
