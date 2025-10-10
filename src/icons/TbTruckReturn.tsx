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
        "d": "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
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
        "d": "M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 17l6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 6h5l3 5v6h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
