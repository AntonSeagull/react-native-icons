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
        "d": "M9 3l6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9l6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15l3 4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15l-4.5 7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 12h14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
