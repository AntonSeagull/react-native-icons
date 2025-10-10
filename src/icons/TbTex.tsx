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
        "d": "M9 8v-1h-6v1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15l-5 -8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 15l5 -8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 11h-4v8h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 15h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
