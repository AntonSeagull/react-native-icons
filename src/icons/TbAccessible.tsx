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
        "d": "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
