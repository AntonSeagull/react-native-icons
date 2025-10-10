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
        "d": "M4 20h16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.4 10h.6m4 0h.6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7.8 15h7.2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 20l3.5 -10.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
