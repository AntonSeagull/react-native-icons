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
        "d": "M19.5 7a24 24 0 0 1 0 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4.5 7a24 24 0 0 0 0 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19.5a24 24 0 0 0 10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 4.5a24 24 0 0 1 10 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
