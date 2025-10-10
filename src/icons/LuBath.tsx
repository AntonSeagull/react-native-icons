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
        "d": "M10 4 8 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 19v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 12h20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
