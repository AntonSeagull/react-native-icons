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
        "d": "M6 3h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 8h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6 13 8.5 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 13h3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 13c6.667 0 6.667-10 0-10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
