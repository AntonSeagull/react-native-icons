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
        "d": "M12 3v14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 10h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 21h14"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
