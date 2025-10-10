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
        "d": "M3 14l11 -11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 3h4v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 17v4h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 10l-11 11"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
