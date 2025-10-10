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
        "d": "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13.5 6.5l4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21l5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 21v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
