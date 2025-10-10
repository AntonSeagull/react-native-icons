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
        "d": "M8 4h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.453 6.474l-3.453 5.526l5 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 4l5 8l-1.917 3.067"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.535 17.544l-1.535 2.456"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
