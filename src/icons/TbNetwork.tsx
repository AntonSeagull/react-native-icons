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
        "d": "M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 9h12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 20h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15v3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
