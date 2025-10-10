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
        "d": "M13.767 15.12a4.983 4.983 0 0 1 -1.767 -1.12a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 21v-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 19l2 2l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
