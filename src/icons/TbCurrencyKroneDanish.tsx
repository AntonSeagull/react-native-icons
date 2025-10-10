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
        "d": "M5 6v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 12c3.5 0 6 -3 6 -6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 12c3.5 0 6 3 6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 10v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 10a4 4 0 0 0 -4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18.01v-.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
