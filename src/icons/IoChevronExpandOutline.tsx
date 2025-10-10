import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "viewBox": "0 0 512 512",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M136 208L256 104L376 208",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-width": "32",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M136 304L256 408L376 304",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-width": "32",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
