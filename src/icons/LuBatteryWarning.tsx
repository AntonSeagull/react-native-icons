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
        "d": "M10 17h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 7v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 14v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
