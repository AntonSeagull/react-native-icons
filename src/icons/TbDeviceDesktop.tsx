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
        "d": "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 16v4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
