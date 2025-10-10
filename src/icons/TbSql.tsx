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
        "d": "M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 8v8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 15l1 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
