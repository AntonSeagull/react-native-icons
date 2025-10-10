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
        "d": "M2 9l3 5.063"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9l-4.8 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9l3 5.063"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 9l-4.8 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
