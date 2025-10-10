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
        "d": "M4 4c5.333 1.333 10.667 1.333 16 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8h16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 5v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 4.5v15.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 4.5v15.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
