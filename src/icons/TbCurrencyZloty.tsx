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
        "d": "M12 18h-7l7 -7h-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 18v-13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 14.5l6 -3.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
