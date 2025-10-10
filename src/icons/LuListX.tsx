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
        "d": "M16 5H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 19H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m15.5 9.5 5 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m20.5 9.5-5 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
