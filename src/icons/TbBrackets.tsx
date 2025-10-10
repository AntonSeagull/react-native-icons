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
        "d": "M8 4h-3v16h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 4h3v16h-3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
