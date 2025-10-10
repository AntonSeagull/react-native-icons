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
        "d": "M7 9l-3 -3l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 14v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
