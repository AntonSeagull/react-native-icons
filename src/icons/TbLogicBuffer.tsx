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
        "d": "M22 12h-5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 9h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 15h5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 5l10 7l-10 7z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
