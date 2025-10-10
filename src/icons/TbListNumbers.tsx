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
        "d": "M11 6h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 10v-6l-2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
