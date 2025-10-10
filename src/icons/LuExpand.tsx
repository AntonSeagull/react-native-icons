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
        "d": "m15 15 6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m15 9 6-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 16v5h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 8V3h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 16v5h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m3 21 6-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 8V3h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9 3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
