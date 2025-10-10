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
        "d": "M4 8v11a2 2 0 0 0 2 2h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 8v11a2 2 0 0 1-2 2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m9 15 3-3 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
