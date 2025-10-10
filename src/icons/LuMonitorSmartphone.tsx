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
        "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 19v-3.96 3.15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19h5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
