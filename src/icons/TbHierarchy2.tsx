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
        "d": "M10 3h4v4h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 17h4v4h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17h4v4h-4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17l5 -4l5 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7l0 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
