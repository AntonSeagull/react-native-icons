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
        "d": "M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 4h12z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13h-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 10.172a3 3 0 1 0 0 5.656"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
