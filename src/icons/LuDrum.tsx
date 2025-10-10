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
        "d": "m2 2 8 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 2-8 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 13.4v7.9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 13.4v7.9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 9v8a10 5 0 0 0 20 0V9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
