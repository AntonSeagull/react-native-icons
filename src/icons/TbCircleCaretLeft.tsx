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
        "d": "M9 12l4 -4v8z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
