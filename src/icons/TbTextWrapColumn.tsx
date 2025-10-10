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
        "d": "M7 9h7a3 3 0 0 1 0 6h-4l2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17l-2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3v18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 3v18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
