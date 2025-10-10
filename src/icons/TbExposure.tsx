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
        "d": "M3.6 20.4l16.8 -16.8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 8h4m-2 -2v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 16h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
