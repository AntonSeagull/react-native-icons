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
        "d": "M7 4l5 9l5 -9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13l0 7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
