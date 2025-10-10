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
        "d": "M7 20v-11.5a4.5 4.5 0 0 1 9 0v8.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 14l3 3l3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
