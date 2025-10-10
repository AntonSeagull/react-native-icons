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
        "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.5 15a3.5 3.5 0 0 1 -5 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 9l2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9l-2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 9l2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9l-2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
