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
        "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m13.41 13.41 4.18 4.18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
