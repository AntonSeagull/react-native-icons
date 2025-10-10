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
        "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 16l4 -1.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 10c-.5 -1 -2.5 -1 -3 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 10c-.5 -1 -2.5 -1 -3 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
