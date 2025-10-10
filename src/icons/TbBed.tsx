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
        "d": "M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 17v-3h-20"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 8v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
