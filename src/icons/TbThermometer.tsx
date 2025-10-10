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
        "d": "M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 7l-1.5 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 10l-1.5 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 13l-1.5 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
