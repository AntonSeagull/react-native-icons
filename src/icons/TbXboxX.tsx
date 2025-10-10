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
        "d": "M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 8l6 8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 8l-6 8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
