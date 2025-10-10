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
        "d": "M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18v-11h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 17l0 -5l9 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9l18 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12l0 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
