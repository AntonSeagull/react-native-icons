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
        "d": "M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.749 1.028"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 11v-4a4 4 0 1 1 8 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 21l4 -4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
