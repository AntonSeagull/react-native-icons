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
        "d": "M4 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16v-8l4 8v-8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
