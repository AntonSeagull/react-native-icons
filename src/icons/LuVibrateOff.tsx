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
        "d": "m2 8 2 2-2 2 2 2-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 8-2 2 2 2-2 2 2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 10.34V6c0-.55-.45-1-1-1h-4.34"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
