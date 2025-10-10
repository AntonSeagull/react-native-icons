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
        "d": "M8 9h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 13h6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 21l2 -2l-2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17l-2 2l2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
