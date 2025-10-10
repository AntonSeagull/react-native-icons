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
        "d": "M15 3v15a3 3 0 0 1 -6 0v-15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 3h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
