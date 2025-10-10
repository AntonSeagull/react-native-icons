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
        "d": "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19.01v-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 15.01v-.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
