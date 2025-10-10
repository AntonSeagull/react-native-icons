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
        "d": "M4 10a6 6 0 1 1 12 0v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
