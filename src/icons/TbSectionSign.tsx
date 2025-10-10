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
        "d": "M9.172 19a3 3 0 1 0 2.828 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.83 5a3 3 0 1 0 -2.83 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
