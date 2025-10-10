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
        "d": "M3 17l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 17l-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 3l-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
