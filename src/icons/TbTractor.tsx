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
        "d": "M7 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 15l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.5 17l6.5 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 5h-1a1 1 0 0 0 -1 1v4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
