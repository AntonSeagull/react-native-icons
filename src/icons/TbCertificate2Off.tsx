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
        "d": "M12 12a3 3 0 1 0 3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 7h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 18v4l2 -1l2 1v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
