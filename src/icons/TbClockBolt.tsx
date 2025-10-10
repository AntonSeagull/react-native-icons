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
        "d": "M20.984 12.53a9 9 0 1 0 -7.552 8.355"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v5l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16l-2 3h4l-2 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
