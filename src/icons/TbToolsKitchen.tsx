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
        "d": "M4 3h8l-1 9h-6z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 18h2v3h-2z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 15v6h-1v-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12l0 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
