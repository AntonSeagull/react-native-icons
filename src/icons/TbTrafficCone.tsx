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
        "d": "M4 20l16 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.4 10l5.2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.8 15l8.4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 20l5 -15h2l5 15"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
