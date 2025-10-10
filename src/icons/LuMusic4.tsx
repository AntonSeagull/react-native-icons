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
        "d": "M9 18V5l12-2v13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 9 12-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
