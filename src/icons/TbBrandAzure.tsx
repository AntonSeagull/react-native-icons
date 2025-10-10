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
        "d": "M6 7.5l-4 9.5h4l6 -15z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 20l-7 -15l-3 7l4 5l-8 3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
