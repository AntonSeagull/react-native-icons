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
        "d": "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
