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
        "d": "M13.5 11.5l6.5 6.5v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11.5 13.5l6.5 6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20l2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
