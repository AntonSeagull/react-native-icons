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
        "d": "M3 17v-5h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 12v-6l18 -3v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12v-4l-4 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
