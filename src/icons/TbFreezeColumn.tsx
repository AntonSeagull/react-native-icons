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
        "d": "M9 9.5l-6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 4l-6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15l-5 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
