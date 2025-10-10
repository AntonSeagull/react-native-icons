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
        "d": "M18 3v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 16l-4 -4l4 -4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 21v-6a3 3 0 0 0 -3 -3h-11"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
