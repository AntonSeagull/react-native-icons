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
        "d": "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 11h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 14h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 7l3 4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 7l-3 4.5v4.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
