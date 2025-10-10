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
        "d": "M12 19v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 19l-1 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19l1 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
