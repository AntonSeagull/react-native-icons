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
        "d": "M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 21l-9 -9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 21l6 -6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
