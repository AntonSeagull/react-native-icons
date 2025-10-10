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
        "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12v3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
