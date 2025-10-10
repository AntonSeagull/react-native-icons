import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M136 104L256 208L376 104",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M136 408L256 304L376 408",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
