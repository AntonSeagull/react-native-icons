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
        "d": "M7 14l-3 -3l8 -8h6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21l-5 -5l5 -5h5l-5 5l5 5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
