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
        "d": "M12 17l0 -14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 6l-3 -3l-3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 21v-4h4v4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
