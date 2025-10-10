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
        "d": "M3 5h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 19h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 9l2 6h1l2 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 15v-6h2a2 2 0 1 1 0 4h-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
