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
        "d": "M3 13v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 10h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 3v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 22l5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 21.5v-4.5h-4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
