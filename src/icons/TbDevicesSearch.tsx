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
        "d": "M13 13v-4a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20.2 20.2l1.8 1.8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 9h2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
