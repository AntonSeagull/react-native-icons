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
        "d": "M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
