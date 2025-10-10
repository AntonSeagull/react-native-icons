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
        "d": "M7 20l10 -16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 16h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 20l-10 -16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
