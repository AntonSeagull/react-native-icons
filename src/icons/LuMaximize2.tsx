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
        "d": "M15 3h6v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 3-7 7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m3 21 7-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21H3v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
