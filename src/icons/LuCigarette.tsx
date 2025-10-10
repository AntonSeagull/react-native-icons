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
        "d": "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 8c0-2.5-2-2.5-2-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 8c0-2.5-2-2.5-2-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12v4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
