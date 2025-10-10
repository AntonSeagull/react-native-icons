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
        "d": "M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 8l2 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 14l2 2l2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
