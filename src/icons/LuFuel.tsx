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
        "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 21h13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 9h11"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
