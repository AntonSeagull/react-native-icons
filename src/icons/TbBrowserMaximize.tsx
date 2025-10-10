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
        "d": "M4 8h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 8l5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 7.5v-4.5h-4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
