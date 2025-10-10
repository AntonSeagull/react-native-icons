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
        "d": "M6 9v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 3-6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 9-6-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 11.5V15"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
