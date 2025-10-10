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
        "d": "M6 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 11l12 -1v-4l-12 -1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 5.5v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 6v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 21h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
