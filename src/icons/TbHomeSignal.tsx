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
        "d": "M15 22v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 22v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 22v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
