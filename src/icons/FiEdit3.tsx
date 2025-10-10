import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "xmlns": "http://www.w3.org/2000/svg",
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
        "d": "M12 20h9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
