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
        "d": "M9 3l6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9l4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
