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
        "d": "M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828a2 2 0 0 1 -1.821 1.172h-11a1 1 0 0 1 -1 -1v-14m4 -1v1m0 4v13"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 8h2"
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
