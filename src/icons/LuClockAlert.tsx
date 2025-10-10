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
        "d": "M12 6v6l4 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 12v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 21h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21.25 8.2A10 10 0 1 0 16 21.16"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
