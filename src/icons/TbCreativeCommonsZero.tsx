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
        "d": "M12 12m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 9l-4 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
