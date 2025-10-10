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
        "d": "M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 7l-1 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7l-1 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10h7.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 14h-7.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
