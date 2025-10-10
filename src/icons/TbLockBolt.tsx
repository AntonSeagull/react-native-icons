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
        "d": "M13.5 21h-6.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11v-4a4 4 0 1 1 8 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16l-2 3h4l-2 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
