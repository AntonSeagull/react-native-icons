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
        "d": "M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21v-4a2 2 0 1 1 4 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
