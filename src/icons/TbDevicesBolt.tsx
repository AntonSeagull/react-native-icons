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
        "d": "M13 19v-10a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16l-2 3h4l-2 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
