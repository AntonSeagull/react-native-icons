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
        "d": "M5 9v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 15.7A9 9 0 0 0 19 9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
