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
        "d": "M10.5 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.5 8l-3 4l3 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.5 12h1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
