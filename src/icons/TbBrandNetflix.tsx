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
        "d": "M9 3l10 18h-4l-10 -18z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 3v18h4v-10.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 21v-18h-4v10.5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
