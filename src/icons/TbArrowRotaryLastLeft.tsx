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
        "d": "M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 15v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.5 9.5l-6.5 -6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 3h-5v5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
