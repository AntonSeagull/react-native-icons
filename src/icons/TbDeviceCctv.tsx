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
        "d": "M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 7v7a7 7 0 0 1 -14 0v-7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14l.01 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
