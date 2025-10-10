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
        "d": "M20 6l-11 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 12l-7 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18l-11 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8l4 4l-4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
