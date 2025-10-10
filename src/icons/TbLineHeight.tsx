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
        "d": "M3 8l3 -3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16l3 3l3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 5l0 14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 6l7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 12l7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 18l7 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
