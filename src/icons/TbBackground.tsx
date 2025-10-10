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
        "d": "M4 8l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 4l-10 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20l16 -16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10l-10 10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 16l-4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
