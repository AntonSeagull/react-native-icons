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
        "d": "M18 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 10v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 10v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
