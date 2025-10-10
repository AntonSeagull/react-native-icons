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
        "d": "M3 21h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 21v-15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 18v3"
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
