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
        "d": "M7 9v5a5 5 0 0 0 10 0v-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 5h14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
