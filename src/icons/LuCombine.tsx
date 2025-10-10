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
        "d": "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m7 15 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m7 21 3-3H5a2 2 0 0 1-2-2v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
