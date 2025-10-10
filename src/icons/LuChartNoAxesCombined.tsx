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
        "d": "M12 16v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 14v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 18v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 14v7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
