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
        "d": "M9 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11.5 9.5l6.5 -6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 3h5v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
