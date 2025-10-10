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
        "d": "M8 3v3a2 2 0 0 1-2 2H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 8h-3a2 2 0 0 1-2-2V3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16h3a2 2 0 0 1 2 2v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21v-3a2 2 0 0 1 2-2h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
