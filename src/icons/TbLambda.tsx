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
        "d": "M6 20l6.5 -9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 20c-6 0 -6 -16 -12 -16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
