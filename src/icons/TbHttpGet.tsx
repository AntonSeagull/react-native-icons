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
        "d": "M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 8h-4v8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12h2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 8v8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
