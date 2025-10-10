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
        "d": "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7l9 6l9 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 22l5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 21.5v-4.5h-4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
