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
        "d": "M10 6v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 6v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3h6v3h-6z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
