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
        "d": "M9 6h11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 18h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 6v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 18v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
