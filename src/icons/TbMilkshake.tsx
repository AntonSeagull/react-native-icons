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
        "d": "M17 10a5 5 0 0 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 10m0 1a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 5v-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
