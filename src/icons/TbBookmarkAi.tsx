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
        "d": "M10.02 18.32l-4.02 2.68v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 21v-4a2 2 0 1 1 4 0v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 19h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
