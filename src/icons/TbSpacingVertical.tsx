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
        "d": "M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 12h-8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
