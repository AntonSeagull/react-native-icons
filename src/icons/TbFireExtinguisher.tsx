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
        "d": "M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16h6"
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
        "d": "M16 5l-4 -1l4 -1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 4h-3a3 3 0 0 0 -3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
