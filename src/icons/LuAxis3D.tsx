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
        "d": "M13.5 10.5 15 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 4v15a1 1 0 0 0 1 1h15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.293 19.707 6 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 15 1.5-1.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
