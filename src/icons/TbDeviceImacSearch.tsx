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
        "d": "M11 17h-7a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 13h10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 21h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 17l-.5 4"
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
    }
  ]
};

export default GenIcon(icon);
