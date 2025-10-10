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
        "d": "M8 11a4 4 0 1 1 8 0v5h-8z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 4h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
