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
        "d": "M4 5h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 3v2c0 4.418 -2.239 8 -5 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 9c0 2.144 2.952 3.908 6.7 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 20l4 -9l4 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19.1 18h-6.2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
